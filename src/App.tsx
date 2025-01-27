// Update App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SearchBar from "./components/Searchbar";
import logo from "./assets/logo_w.png";
import DarkModeToggle from "./components/DarkModeToggle";

const Header = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Services Logo"
                className="h-12 w-auto mr-3"
              />
              <span className="text-xl font-bold text-gray-800">
                9ribLik
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <SearchBar />
          <DarkModeToggle />

          {/* Contact Information */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+212699932627"
              className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
            >
              {/* <PhoneIcon className="h-5 w-5 mr-2" /> */}
              +212 6 99 93 26 27
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
