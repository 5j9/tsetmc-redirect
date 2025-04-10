# TSETMC Redirect

https://5j9.github.io/ is a simple webpage that allows you to quickly navigate to the instrument information page of a stock on the Tehran Stock Exchange Technology Management Co (TSETMC) website ([tsetmc.com](https://tsetmc.com/)) by entering its symbol. For example:

https://5j9.github.io/tsetmc-redirect/?symbol=آگاس

will redirect to

https://tsetmc.com/instInfo/33887145736684266

It utilizes the TSETMC's public API to search for the symbol and then redirects you to the corresponding instrument's page.

**How to Use:**

1.  **Visit the GitHub Pages URL:** Go to the live URL of this project on GitHub Pages: `https://5j9.github.io/tsetmc-redirect/`.

2.  **Enter the Stock Symbol:** On the webpage, you will see an input field labeled "Enter Stock Symbol (e.g., آگاس)". Type the TSETMC stock symbol you are looking for into this field.

3.  **Click "Go" or Press Enter:** Click the "Go" button or press the Enter key while the input field is focused.

4.  **Automatic Redirection:** The page will then query the TSETMC API for the entered symbol. If a match is found, you will be automatically redirected to the instrument information page on the TSETMC website.

**Using as a Custom Search Engine in Your Browser (Recommended for Convenience):**

You can configure your web browser to use this page as a custom search engine. This will allow you to type a keyword followed by the stock symbol directly into your browser's address bar to quickly jump to the TSETMC page. Here's how to do it for some popular browsers:

**Google Chrome (or Chromium-based browsers like Brave, Microsoft Edge):**

1.  Open Chrome's settings (three dots menu -> Settings).
2.  Go to "Search engine" -> "Manage search engines and site search."
3.  Click "Add" under "Site search."
4.  **Search engine:** Enter a descriptive name like "TSETMC Go".
5.  **Shortcut:** Choose a short keyword you'll type in the address bar to trigger this search (e.g., `tse`, `tsetmcgo`).
6.  **URL with %s in place of query:** Enter the URL of this GitHub Pages site followed by `?symbol=%s`:
    [https://5j9.github.io/tsetmc-redirect/?symbol=%s](https://5j9.github.io/tsetmc-redirect/?symbol=%s)
7.  Click "Save."

   **How to Use in Chrome:** Now, in your Chrome address bar, type your chosen shortcut (e.g., `tse`), press **Space** or **Tab**, then type the stock symbol (e.g., `آگاس`), and press Enter. You will be directly redirected to the TSETMC page for that symbol.

**Mozilla Firefox:**

1.  Visit your GitHub Pages URL: `https://5j9.github.io/tsetmc-redirect/`.
2.  In the search bar on the webpage, type a sample stock symbol (e.g., `آگاس`).
3.  Right-click inside the input field.
4.  Select "Add a Keyword for this Search...".
5.  **Name:** Enter a descriptive name like "TSETMC Go".
6.  **Keyword:** Choose a short keyword (e.g., `tse`, `tsetmcgo`).
7.  **Address:** The URL of your GitHub Pages site with the `%s` placeholder should be automatically filled. If not, enter:
    [https://5j9.github.io/tsetmc-redirect/?symbol=%s](https://5j9.github.io/tsetmc-redirect/?symbol=%s)
8.  Click "Save."

   **How to Use in Firefox:** In your Firefox address bar, type your chosen keyword (e.g., `tse`), press **Space**, then type the stock symbol (e.g., `آگاس`), and press Enter.

**Microsoft Edge:**

Follow the instructions for Google Chrome, as Edge uses the same underlying Chromium engine for search engine management.

**Safari:**

Safari's custom search engine options are more limited. You might need to rely on third-party extensions or use the webpage directly.

**Contributing:**

If you have suggestions for improvements or find any issues, feel free to open a pull request or issue on the GitHub repository.
