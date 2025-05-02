// src/app/utils/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    "Index": {
        "title": "HEY, Welcome to your Inventory Manager. Track your products, stocklevels, and more — all in one place."
    }
  },
  id: {
   "Index": {
        "title": "Hello, mubarak ho, aap product level pe ho."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;