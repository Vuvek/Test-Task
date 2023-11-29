import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Header/Navigation";
import ProviderStore from "../store/ProviderStore";
import WrapperComponent from "../components/WrapperComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WrapperComponent>{children}</WrapperComponent>
      </body>
    </html>
  );
}
