import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja-JP" className="dark">
        <Head>
          <meta charSet="utf-8" />
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <div className="dark:bg-darkgrey">
          <body>
            <Main />
            <NextScript />
          </body>
        </div>
      </Html>
    );
  }
}

export default Document;
