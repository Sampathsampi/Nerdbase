"use client"
import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { Footer, NavbarComponent, Preface } from "@/components";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <Fragment>
      <Head>
        {/*  Google tag (gtag.js)  */}
        <title>
          <h1>nerd base</h1>
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="yVSfOy45C1HSMNZE9S_HGJHlvIaJsqDPMfksNuMI5bo"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins|Monteserrat"></link>
      </Head>
      <main>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZMS9BS"
            id="googleTM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <NavbarComponent />
        <ParallaxProvider>
          <Preface />
        </ParallaxProvider>
        <Footer />
      </main>
    </Fragment>
  )
}
