import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amigo - Your Pixel Perfect Friend",
  description: "A fun pixelated website for children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
