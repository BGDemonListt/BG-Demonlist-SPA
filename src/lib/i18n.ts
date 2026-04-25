import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { IS_PRODUCTION } from '../constants';
import resources from '../locales';
import { ALL_LOCALES, Locale } from '../types';

i18n
  .use(HttpBackend) // Load translations from JSON files
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Bind with React
  .init({
    resources,
    fallbackLng: Locale.BG, // Default language
    supportedLngs: ALL_LOCALES, // List of supported languages
    debug: !IS_PRODUCTION, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
