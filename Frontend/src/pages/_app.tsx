import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ModuleProvider } from "../context/SelectedModuleContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModuleProvider>
      <Component {...pageProps} />
    </ModuleProvider>
  );
}

export default MyApp;
