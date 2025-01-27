import { useSearchParams } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { serviceCategories } from "../data/services";

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const filteredCategories = serviceCategories
    .map((category) => ({
      ...category,
      services: category.services.filter(
        (service) =>
          service.toLowerCase().includes(searchQuery) ||
          category.title.toLowerCase().includes(searchQuery)
      ),
    }))
    .filter((category) => category.services.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Our Services
        </h1>

        {filteredCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-xl">
              No services found matching your search
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  expandedCategory === category.title ? "h-auto" : "h-24"
                }`}
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 h-24 flex flex-col justify-between"
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.title
                        ? null
                        : category.title
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                        {category.title}
                      </h2>
                    </div>
                    {expandedCategory === category.title ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </div>
                </div>

                {expandedCategory === category.title && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <ul className="space-y-3">
                      {category.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-center justify-between space-x-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg group"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-blue-500">•</span>
                            <span>{service}</span>
                          </div>
                          <button
                            onClick={() => handleWhatsAppClick(service)}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            Request
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
// In your card component (where the Request button is located)
const handleWhatsAppClick = (service: string) => {
  const phoneNumber = "+212699932627"; // Replace with your WhatsApp number
  const message = `Hello, I would like to request the service: ${service}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};

export default Home;
