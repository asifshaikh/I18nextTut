import { useDispatch } from 'react-redux';
import { setLanguage } from '../store';
import i18n from '../localization/i18n';
function LanguageSwitcher() {
  const dispatch = useDispatch();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    dispatch(setLanguage(lang));
  };

  return (
    <div style={{ marginTop: '16px' }}>
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '8px',
        }}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '8px',
        }}
        onClick={() => handleLanguageChange('hin')}
      >
        हिन्दी
      </button>

      <button
        style={{
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '8px',
        }}
        onClick={() => handleLanguageChange('es')}
      >
        Español
      </button>
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '8px',
        }}
        onClick={() => handleLanguageChange('fr')}
      >
        Français
      </button>
    </div>
  );
}

export default LanguageSwitcher;
