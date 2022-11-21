import Header from "./Header";
import Tab from "./Tab";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>EmptireMedia</title>
      </Head>

      <Header />
      <Tab />

      <main className="main-container">{children}</main>
    </div>
  );
}
