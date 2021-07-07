import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module

import "nprogress/nprogress.css"; //styles of nprogress

// Binding events for loading indicator.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
