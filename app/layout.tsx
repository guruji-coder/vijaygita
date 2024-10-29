import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GuruGita",
  description: "GuruGita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sag5cxx.css" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
