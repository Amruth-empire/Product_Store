import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
import { ProductProvider } from "@/context/ProductContext";

export const metadata = {
  title: "Product Store",
  description: "An e-commerce platform for buying and selling products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ProductProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
         <ToastContainer />
        </ProductProvider>
      </body>
    </html>
  );
}
