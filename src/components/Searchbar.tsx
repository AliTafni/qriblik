// Update src/components/SearchBar.tsx
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  const handleClear = () => {
    setQuery("");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (debouncedQuery) {
      navigate(`/?q=${encodeURIComponent(debouncedQuery)}`, { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [debouncedQuery, navigate]);

  return (
    <div className="relative flex-1 max-w-2xl mx-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="absolute right-3 top-3.5 flex items-center">
          {query && (
            <button
              onClick={handleClear}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
