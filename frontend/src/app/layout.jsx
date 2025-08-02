import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Product Store",
  description: "An e-commerce platform for buying and selling products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
