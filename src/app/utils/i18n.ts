// src/app/utils/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    "Index": {
        "title": "HEY, Welcome to your Inventory Manager. Track your products, stocklevels, and more — all in one place.",
        "Home:": "Home",
        "Products": "Products",
        "Sign in": "Sign in",
        "Sign up": "Sign up"
    }
  },
  id: {
   "Index": {
        "title": "ارے، آپ کے انوینٹری مینیجر میں خوش آمدید۔ اپنے پروڈکٹس، سٹاک لیولز وغیرہ کو ٹریک کریں — سب ایک جگہ پر۔",
        "Home": "گھر",
        "Products": "مصنوعات",
        "Sign in": "سائن ان کریں",
        "Sign up": "سائن اپ کریں",
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