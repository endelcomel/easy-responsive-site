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

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              NewsPortal
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.path}
                  className="px-3 py-2 text-gray-700 hover:text-primary flex items-center"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                {item.submenu && activeSubmenu === item.title && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
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
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <div key={item.title}>
                <a
                  href={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
                {item.submenu && (
                  <div className="pl-8">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.title}
                        href={subitem.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
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