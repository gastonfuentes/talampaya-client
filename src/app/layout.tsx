import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";



export const metadata: Metadata = {
  title: "Talampaya pro tour",
  description: "sitio web de los torneos de padel talampaya pro tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
