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
    <>
      {/* Clickable Card */}
      <div
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-red-200"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Dialog */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Dialog Container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
            <Dialog.Title className="text-3xl font-bold text-gray-800 mb-4">
              {title}
            </Dialog.Title>

            <div className="text-gray-600 space-y-4">
              <p>{dialogContent}</p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close Dialog
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Card;
