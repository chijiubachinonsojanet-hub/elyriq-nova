import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Elyriq Nova",
  description: "Africa's technology-enabled cleaning marketplace.",
};

// This forces mobile browsers to honor actual device widths instead of shrinking
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}