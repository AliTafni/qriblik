import  { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";



const App = () => {
  const { i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Match your md breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen transition-colors duration-300"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <Router>
        <Header onMenuToggle={handleMenuToggle} />

        {/* Mobile Sidebar */}

        <div className="md:flex">
          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    isMobileMenuOpen={isMobileMenuOpen}
                    handleMenuToggle={handleMenuToggle}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
};

export default App;
