import  { useState } from 'react';
import { Menu, X, Code, ExternalLink } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Portfolio', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Code className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">Martin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
              <a href="#" className="text-gray-400 hover:text-gray-900"><ExternalLink className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900"><ExternalLink className="w-5 h-5" /></a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-fadeIn">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
