import React from "react";
import { Service } from "../data/services";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ServiceListProps {
  services: Service[];
  selectedCategoryId: string | null;
}

const ServiceList: React.FC<ServiceListProps> = ({
  services,
  selectedCategoryId,
}) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q")?.toLowerCase() || "";
  const { t } = useTranslation();

  // Filter services
  const filteredServices = services.filter((service) => {
    const matchesCategory =
      !selectedCategoryId || service.categoryId === selectedCategoryId;
    const matchesSearch =
      service.id.toLowerCase().includes(searchQuery) ||
      t(`services.${service.id}.description`)
        .toLowerCase()
        .includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const generateWhatsAppMessage = (serviceId: string) => {
    const serviceName = t(`service.services.${serviceId}.title`);
    const message = t("service.messageTemplate", { serviceName });
    console.log(message)
    return `https://wa.me/${t("phoneNumber")}?text=${encodeURIComponent(
      message
    )}`;
  };
  console.log(selectedCategoryId);

  return (
    <div className="p-4 sm:p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        {selectedCategoryId
          ? t("service.categoryHeading", {
              category: t(`categories.${selectedCategoryId}`),
            })
          : t("service.allServices")}
      </h2>

      <div className="flex-1 overflow-y-auto max-h-[82vh]">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {filteredServices.map((service) => (
              <a
                href={generateWhatsAppMessage(service.id)}
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:border-red-500 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-lg text-red-600 dark:text-red-500">
                  {t(`service.services.${service.id}.title`)}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                  {t(`service.services.${service.id}.description`)}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            {t("service.noServices")}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceList;
