import { I18nextProvider } from 'react-i18next';
import { Outlet } from 'react-router';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import QueryClientProvider from './components/query-client-provider/QueryClientProvider';
import i18n from './lib/i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <QueryClientProvider>
          <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white flex flex-col">
            <Header />

            <main className="flex-1">
              <Outlet />
            </main>

            <Footer />
          </div>
        </QueryClientProvider>
      </ErrorBoundary>
    </I18nextProvider>
  );
}
