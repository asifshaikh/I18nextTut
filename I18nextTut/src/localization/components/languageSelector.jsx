import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'hi', lang: ' हिन्दी ' },
  { code: 'fr', lang: 'French' },
];
const LanguageSelector = () => {
  const { t } = useTranslation();
  const handleLanguageChange = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <div className='btn-container'>
      {languages.map((lang) => (
        <button key={lang.code} onClick={() => handleLanguageChange(lang.code)}>
          {lang.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
