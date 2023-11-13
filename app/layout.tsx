import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import  GlobalReduxProvider  from "./GlobalRedux/provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "300", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <GlobalReduxProvider>
        <Navbar />
        {children}
        </GlobalReduxProvider>
      </body>
    </html>
  );
}
