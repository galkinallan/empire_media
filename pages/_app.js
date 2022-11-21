import "../styles/globals.css";
import Layout from "../components/Layout";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import reducers from "../reducers";

const store = configureStore({ reducer: reducers });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
