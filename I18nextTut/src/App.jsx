import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './localization/components/languageSelector';

function App() {
  const { t } = useTranslation();

  return (
    <div
      className='container'
      style={{ margin: '10px', padding: '20px', gap: '10px' }}
    >
      <h1>{t('welcome')}</h1>

      <LanguageSelector />
    </div>
  );
}

export default App;
