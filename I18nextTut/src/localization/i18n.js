import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to our page!',
    },
  },
  es: {
    translation: {
      welcome: '¡Bienvenido a nuestra página!',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue sur notre page!',
    },
  },
  hin: {
    translation: {
      welcome: 'हमारे पेज पर आपका स्वागत है!',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
