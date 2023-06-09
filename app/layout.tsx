import "./globals.css";
import Navbar from "./component/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./component/Footer";

export const metadata = {
  title: "Wasami Martins",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
