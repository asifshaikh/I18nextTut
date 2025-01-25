import { useTranslation } from 'react-i18next';

function WelcomeMessage() {
  const { t } = useTranslation();
  return (
    <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{t('welcome')}</h1>
  );
}

export default WelcomeMessage;
