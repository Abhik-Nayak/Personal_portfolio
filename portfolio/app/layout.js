// import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Abhik Nayak - Software Developer",
  description:
    "This is the portfolio of Abhik Nayak. Experienced Full-Stack Developer with 3+ years of expertise in building responsive, high-performance web applications. Proficient in front-end technologies like React.js, Next.js, and Material-UI, and back-end frameworks such as Node.js, Express, and Django Rest Framework. Skilled in JavaScript (ES5/ES6), TypeScript, HTML5, CSS3, and database management using MySQL, PostgreSQL, and MongoDB. Adept at creating user-friendly interfaces, managing state with Redux, and integrating RESTful APIs. A proactive problem-solver and team player, I excel in debugging, performance optimization, and agile environments. Passionate about delivering secure, maintainable, and scalable solutions while ensuring exceptional user experiences across devices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  );
}
