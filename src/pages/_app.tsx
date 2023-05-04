import "@/styles/globals.css";
import "../i18";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Suspense fallback="loading">
      <Component {...pageProps} />
    </React.Suspense>
  );
}
