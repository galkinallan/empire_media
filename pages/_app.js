import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { StateContext } from "../context/StateContext";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </Provider>
  );
}

export default MyApp;
