export default ({title, children}: Lume.Data) => {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <title>{title}</title>
        <link rel="stylesheet" href="./styles.css" />
        <script type="text/javascript" src="./assets/scripts/theme.js"></script>
      </head>
      <body>
        <header>
          <nav>
            <a href="">Home</a>
          </nav>
          <button id="theme-switcher">
            <svg>
              <use href="./assets/icons/moon.svg#darkIcon" />
            </svg>
          </button>
        </header>
        <main>
          {children}
        </main>
        <footer>
          &copy; Matthew Kolega 2024
        </footer>
      </body>
    </html>
  );
}