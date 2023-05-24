"use client";
import { Inter } from "next/font/google";
import { Providers } from "@Redux/provider";
import "@styles/customBootstrap.scss";
import "@styles/globals.scss";
import Header from "@Component/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Header />
          <div className="container">
            <div className="title-header">
              <h2 className="lmc-title">
                <span>Location Management Center</span>
              </h2>
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
