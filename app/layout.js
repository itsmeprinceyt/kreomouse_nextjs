import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kreo Mouse Product - ItsMe Prince",
  description: "A sleek landing page for the Kreo Mouse, showcasing its advanced features and design. Built with Next.js for fast, responsive performance.",
  icons: {
    icon: "/icons/mouse.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Mohd Uvaish, ItsMe Prince, Website, Landing Page, Product WebPage, Web Developer, Next.js, Tailwind CSS, Full Stack Developer" />
        <meta name="author" content="Mohd Uvaish" />
      </head>
      <body className={`${inter.className} relative`}>
          {children}
      </body>
    </html>
  );
}