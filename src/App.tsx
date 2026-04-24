import { Link, Outlet } from 'react-router'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-6">
          <Link
            to="/"
            className="font-semibold text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            BG Demonlist
          </Link>
          <div className="flex gap-4 ml-auto">
            <Link
              to="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              About
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-sm text-gray-500 dark:text-gray-500">
        BG Demonlist &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
