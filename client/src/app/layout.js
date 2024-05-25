import Auth from "./auth";
import Providers from "./providers";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://canim-csr.vercel.app"),
  title: "Canim - Shop & eCommerce React Template",
  description:
    "Buy Canim - Shop & eCommerce Next.Js Template by Fardin Hasan Neloy. Canim | Shop & eCommerce React Template - a responsive React template. Canim is built with the latest Next.Js App Directory",
  openGraph: {
    title: "Canim - Shop & eCommerce React Template",
    description:
      "Buy Canim - Shop & eCommerce Next.Js Template by Fardin Hasan Neloy. Canim | Shop & eCommerce React Template - a responsive React template. Canim is built with the latest Next.Js App Directory",
    url: "https://canim-csr.vercel.app",
    siteName: "Canim Template",
    images:
      "https://github.com/Fardin7864/bd-calling-ecommerce/blob/master/client/public/og.png?raw=true",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fardinhasan",
    title: "Canim - Shop & eCommerce React Template",
    description:
      "Buy Canim - Shop & eCommerce Next.Js Template by Fardin Hasan Neloy. Canim | Shop & eCommerce React Template - a responsive React template. Canim is built with the latest Next.Js App Directory",
    image:
      "https://github.com/Fardin7864/bd-calling-ecommerce/blob/master/client/public/og.png?raw=true",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Auth>{children}</Auth>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
