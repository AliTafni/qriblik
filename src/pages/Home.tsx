import { useState } from "react";
import Sidebar from "../components/SideBar";
import ServiceList from "../components/ServiceList";
import { categories, services } from "../data/services";

interface HomeProps {
  isMobileMenuOpen: boolean;
  handleMenuToggle: () => void;
}

function Home({ isMobileMenuOpen, handleMenuToggle }: HomeProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    handleMenuToggle(); // Close sidebar on selection
  };



  return (
    <div className="flex flex-col sm:flex-row h-full">
      {/* Sidebar for larger screens */}
      <aside className="w-full sm:w-64 hidden sm:block">
        <Sidebar
          categories={categories}
          onCategoryClick={handleCategoryClick}
          selectedCategoryId={selectedCategoryId}
        />
      </aside>

      {/* Mobile Sidebar (Full Screen) */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-700 shadow-md transition-transform duration-300 ease-in-out sm:hidden flex flex-col">
          {/* Close Button */}
          <button
            onClick={handleMenuToggle}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            aria-label="Close Menu"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.5 4l-6.5 6.5-6.5-6.5-2 2 6.5 6.5-6.5 6.5 2 2 6.5-6.5 6.5 6.5 2-2-6.5-6.5 6.5-6.5z" />
            </svg>
          </button>

          {/* Sidebar Content */}
          <Sidebar
            categories={categories}
            onCategoryClick={handleCategoryClick}
            selectedCategoryId={selectedCategoryId}
          />

          
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <ServiceList
          services={services}
          selectedCategoryId={selectedCategoryId}
        />
      </main>
    </div>
  );
}

export default Home;
