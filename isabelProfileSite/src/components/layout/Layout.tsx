import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if (window.scrollY > 0) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative bg-light text-secondary font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isNavbarVisible ? 'bg-light shadow-md' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-primary">Isabel</Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-dark hover:text-primary font-medium">Home</Link>
              <Link to="/about" className="text-dark hover:text-primary font-medium">About</Link>
              <Link to="/portfolio" className="text-dark hover:text-primary font-medium">Portfolio</Link>
              <Link to="/contact" className="text-dark hover:text-primary font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center animate-action hover:bg-opacity-90 transition-all duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};