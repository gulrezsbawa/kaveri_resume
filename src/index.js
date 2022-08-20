import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage } from "./Components/HomePage";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <HomePage />
    </BaseProvider>
  </StyletronProvider>
);
