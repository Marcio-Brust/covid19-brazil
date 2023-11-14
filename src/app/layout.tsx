import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CovidContextProvider } from "@/context/UfContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Covid-19 Brasil",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CovidContextProvider>{children}</CovidContextProvider>
      </body>
    </html>
  );
}
