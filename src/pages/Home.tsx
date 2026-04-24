export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        BG Demonlist
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
        Welcome to the BG Demonlist — built with React, Vite, TypeScript,
        Tailwind CSS v4, and React Router v7.
      </p>
      <div className="flex gap-4">
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          React Docs
        </a>
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Vite Docs
        </a>
      </div>
    </div>
  )
}
