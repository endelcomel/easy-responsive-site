import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const menuItems = [
  {
    title: 'Beranda',
    path: '/',
  },
  {
    title: 'News',
    path: '/news',
    submenu: [
      { title: 'Nasional', path: '/news/nasional' },
      { title: 'Internasional', path: '/news/internasional' },
      { title: 'Ekonomi', path: '/news/ekonomi' },
    ],
  },
  {
    title: 'Sport',
    path: '/sport',
    submenu: [
      { title: 'Sepakbola', path: '/sport/sepakbola' },
      { title: 'MotoGP', path: '/sport/motogp' },
      { title: 'E-Sport', path: '/sport/esport' },
    ],
  },
  {
    title: 'Teknologi',
    path: '/teknologi',
  },
  {
    title: 'Entertainment',
    path: '/entertainment',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setActiveSubmenu(title);
  };

  const handleMouseLeave = () => {
    const id = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // 300ms delay before closing
    setTimeoutId(id);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-bold text-primary">
              NewsPortal
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.path}
                  className="px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-700 hover:text-primary flex items-center whitespace-nowrap"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                {item.submenu && activeSubmenu === item.title && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.title}
                        href={subitem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subitem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2 absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
            {menuItems.map((item) => (
              <div key={item.title} className="px-4">
                <a
                  href={item.path}
                  className="block py-3 text-gray-700 hover:text-primary border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <div className="pl-4 bg-gray-50">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.title}
                        href={subitem.path}
                        className="block py-2 text-sm text-gray-600 hover:text-primary border-b border-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {subitem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;