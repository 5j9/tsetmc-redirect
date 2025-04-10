function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function redirectToTSETMC(symbol) {
    if (!symbol) {
        alert("Please enter a stock symbol.");
        return;
    }

    const searchUrl = `https://cdn.tsetmc.com/api/Instrument/GetInstrumentSearch/${encodeURIComponent(symbol)}`;

    fetch(searchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("error-message").style.display = "none";
            if (data && data.instrumentSearch && data.instrumentSearch.length > 0) {
                const firstResult = data.instrumentSearch[0];
                const inscode = firstResult.insCode;
                if (inscode) {
                    window.location.href = `https://tsetmc.com/instInfo/${inscode}`;
                } else {
                    document.getElementById("error-message").textContent = "Error: Inscode not found in the response.";
                    document.getElementById("error-message").style.display = "block";
                }
            } else {
                document.getElementById("error-message").textContent = "Error: No results found for the symbol.";
                document.getElementById("error-message").style.display = "block";
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
            document.getElementById("error-message").textContent = "Error: Could not fetch data from TSETMC.";
            document.getElementById("error-message").style.display = "block";
        });
}

// Get the symbol from the URL parameter on page load
const urlSymbol = getUrlParameter('symbol');
const stockSymbolInput = document.getElementById("stockSymbol");
const goButton = document.getElementById("goButton");

if (urlSymbol) {
    // Hide the input field and button if a symbol is in the URL
    if (stockSymbolInput && goButton) {
        stockSymbolInput.style.display = "none";
        goButton.style.display = "none";
    }
    redirectToTSETMC(urlSymbol);
} else {
    // Add event listener for the button if no symbol in URL
    if (goButton) {
        goButton.addEventListener("click", function() {
            const symbol = stockSymbolInput.value.trim();
            redirectToTSETMC(symbol);
        });
    }

    // Allow pressing Enter key in the input field to trigger the search
    if (stockSymbolInput) {
        stockSymbolInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                const symbol = stockSymbolInput.value.trim();
                redirectToTSETMC(symbol);
            }
        });
    }
}
