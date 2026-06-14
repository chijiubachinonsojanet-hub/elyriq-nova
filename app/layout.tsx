import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elyriq Nova",
  description: "Africa's Premium Cleaning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}