import { useState } from "react";
import { Dialog } from "@headlessui/react";

type CardProps = {
  title: string;
  description: string;
  dialogContent: string;
};

const Card = ({ title, description, dialogContent }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="p-6 bg-white bg-opacity-25 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-red-200"
      onClick={() => setIsOpen(true)}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
