import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AuthorSignature from "@/components/AuthorSignature/AuthorSignature";

import { Montserrat, Cormorant_Garamond } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: "700",
});

export const metadata = {
  title: "Luxury Hotels",
  description:
    "Take advantage of the quick booking feature and get full access to our luxurious rooms with breathtaking views, deluxe service, delicious cuisine and much more for an unforgettable vacation at a luxury level.",
  keywords: [
    "Hotel",
    "Luxury",
    "Book",
    "Vacation",
    "Advantages",
    "Testimonials",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant_garamond.variable}`}
    >
      <body>
        <div className="wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
          <AuthorSignature />
        </div>
      </body>
    </html>
  );
}
