import type { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { MobileProvider } from "./MobileProvider";
import { ToastProvider } from "./ToastProvider";
import RootLayout from "@/shared/ui/RootLayout";

const Providers = ({ children }: PropsWithChildren) => (
  <BrowserRouter>
    <MobileProvider>
      <ToastProvider>
        <RootLayout>{children}</RootLayout>
      </ToastProvider>
    </MobileProvider>
  </BrowserRouter>
);
export default Providers;
