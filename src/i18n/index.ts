import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';

import en from './locales/en.json';
import tr from './locales/tr.json';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

export const deviceLanguage = Localization.getLocales()[0];
export const changeLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
};

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage?.languageCode || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
