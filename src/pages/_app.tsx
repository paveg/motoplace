import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import SEO from "../../next-seo.config";
import theme from "../styles/theme";
import createEmotionCache from "../utilities/createEmotionCache";

import type { AppProps } from "next/app";

const clientSideEmotionCache = createEmotionCache();

interface CustomProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App({ Component, pageProps }: CustomProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>motoplace</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
