import { RefreshCw, ServerCrash } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { CONTACT_EMAIL } from '../../constants';
import { RoutePage } from '../../types';

// The component that displays a friendly internal error (500) page.
// TODO: Change design
export default function InternalError() {
  const { t } = useTranslation([], { keyPrefix: 'errors' });

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 gap-4">
      <ServerCrash
        size={64}
        className="text-theme-400 dark:text-theme-600"
        strokeWidth={1.25}
      />

      <p className="text-[100px] sm:text-[140px] font-extralight leading-none text-dark-200 dark:text-dark-700 select-none">
        500
      </p>

      <h1 className="text-2xl font-semibold text-gray-800 dark:text-dark-200">
        {t('500.title')}
      </h1>

      <p className="text-base font-light text-gray-500 dark:text-dark-400 max-w-md">
        {t('500.description', { email: CONTACT_EMAIL })}
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-2">
        <Link
          to={RoutePage.HOME}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-theme-600 hover:bg-theme-700 text-white text-sm font-medium shadow-md transition-colors">
          {t('500.go-home')}
        </Link>

        <button
          onClick={handleRefresh}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 dark:border-dark-700 bg-white dark:bg-dark-800 hover:bg-gray-50 dark:hover:bg-dark-700 text-gray-700 dark:text-dark-200 text-sm font-medium transition-colors">
          <RefreshCw size={15} />
          {t('500.refresh')}
        </button>
      </div>
    </section>
  );
}
