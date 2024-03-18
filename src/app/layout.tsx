import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import { Providers } from "./providerUi";
import { ToastContainer } from "react-toastify";
import StoreProvider from "./lib/features/Store.Provider";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eva De Eva",
  description: "https://evadeeva.com.vn/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <StoreProvider>{children}</StoreProvider>
        </Providers>
        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          newestOnTop
        ></ToastContainer>
      </body>
    </html>
  );
}
