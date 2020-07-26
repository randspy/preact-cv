import { h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

import { languageOptions, localStorage } from './language-options';
import { LanguageContext } from './language-context';

export function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem(localStorage);
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <select
      style={{ border: 'none', background: 'transparent' }}
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
