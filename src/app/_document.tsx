/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-document-import-in-page */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />

        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="dark:bg-zinc-800 dark:text-zinc-200 bg-light-100 text-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
