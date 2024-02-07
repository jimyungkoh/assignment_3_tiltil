"use client";

import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
}

export default ProvidersLayout;
