import React from "react";
import { ServiceCategory } from "../data/services";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  categories: ServiceCategory[];
  onCategoryClick: (categoryId: string) => void;
  selectedCategoryId: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({
  categories,
  onCategoryClick,
  selectedCategoryId,
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // Detect if Arabic is selected

  return (
    <div
      className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 w-full sm:w-64 transition-colors duration-300"
      dir={isRTL ? "rtl" : "ltr"} // Change text direction dynamically
    >
      <h3 className="font-bold mb-4 text-gray-700 dark:text-gray-200 transition-colors duration-300">
        {t("categories.all")}
      </h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategoryClick(category.id)}
              className={`block w-full text-left px-4 py-2 rounded transition-all duration-200
                hover:bg-gray-200 dark:hover:bg-gray-700 
                focus:bg-gray-200 dark:focus:bg-gray-700
                ${
                  selectedCategoryId === category.id
                    ? "bg-gray-200 dark:bg-gray-700 font-semibold border-2 border-red-500 dark:border-red-400"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              style={{ textAlign: isRTL ? "left" : "left" }} // Adjust text alignment for RTL
            >
              <span className="flex items-center space-x-2">
                {!isRTL && category.icon} {/* Show icon on the left for LTR */}
                <span>{t(`categories.${category.id}`)}</span>
                {isRTL && category.icon} {/* Show icon on the right for RTL */}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
