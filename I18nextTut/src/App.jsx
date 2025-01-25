import WelcomeMessage from './components/WelcomeScreen.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from './localization/i18n';
function App() {
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    i18n.changeLanguage(lang); // Sync i18n with Redux state
  }, [lang]);

  return (
    <div style={{ padding: '16px' }}>
      <WelcomeMessage />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
