export default ({title, children}: Lume.Data) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
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