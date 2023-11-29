"use client";

import store from "./store";
import { Provider } from "react-redux";

function ProviderStore({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ProviderStore;
