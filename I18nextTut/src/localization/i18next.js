import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'welcome to my website',
      language_switch: 'Switch language',
    },
  },
  hi: {
    translation: {
      welcome: 'मेरी वेबसाइट में आपका स्वागत है',
      language_switch: 'भाषा बदलें',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur mon site web',
      language_switch: 'Changer de langue',
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
