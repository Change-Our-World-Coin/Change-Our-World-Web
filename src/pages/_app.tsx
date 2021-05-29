import React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {createGlobalStyle} from 'styled-components';
import AOS from 'aos';

import 'normalize.css/normalize.css';
import 'aos/dist/aos.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #fff;
    color: #222;
    font-size: 100%;
    line-height: 1.75;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rowdies', sans-serif;
    margin: 3rem 0 1.38rem;
    line-height: 1.1;
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.488rem;
  }

  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-size: 1.728rem;
  }

  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    outline: none;

    @media screen and (-ms-high-contrast: active) {
      border: 2px solid currentcolor;
    }
  }
`;

function MyApp({Component, pageProps}: AppProps) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Change Our World</title>
        <meta
          name="description"
          content="Changing Our World for the better by uniting crypto humanitarians on Binance Smart Chain."
        />
        <meta property="og:title" content="Change Our World" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.changeourworld.io/" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:secure_url" content="/preview.png" />
        <meta property="og:site_name" content="Change Our World" />
        <meta
          property="og:description"
          content="Changing Our World for the better by uniting crypto humanitarians on Binance Smart Chain."
        />
        <meta property="twitter:title" content="Change Our World" />
        <meta
          property="twitter:description"
          content="Changing Our World for the better by uniting crypto humanitarians on Binance Smart Chain."
        />
        <meta property="twitter:image" content="/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/logo-red.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&family=Rowdies:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
