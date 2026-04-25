import { Link } from 'react-router';

function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-6">
        <Link
          to="/"
          className="font-semibold text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          BG Demonlist
        </Link>
        <div className="flex gap-4 ml-auto">
          <Link
            to="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
