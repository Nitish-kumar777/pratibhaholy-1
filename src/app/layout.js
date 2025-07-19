"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import MainNavbar from "@/components/Navbar";
import GlobalLoading from "@/components/GlobalLoading";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handlePageFullyLoaded = () => {
      setIsLoading(false);
    };

    // Check if already loaded (like after navigation)
    if (document.readyState === "complete") {
      handlePageFullyLoaded();
    } else {
      window.addEventListener("load", handlePageFullyLoaded);
    }

    return () => {
      window.removeEventListener("load", handlePageFullyLoaded);
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {isLoading && <GlobalLoading />}
        {!isLoading && (
          <>
            <MainNavbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
