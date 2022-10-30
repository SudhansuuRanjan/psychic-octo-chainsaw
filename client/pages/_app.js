import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
