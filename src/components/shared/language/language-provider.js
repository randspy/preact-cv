import { h } from 'preact';
import { useState } from 'preact/hooks';
import { LanguageContext } from './language-context';
import {
  dictionaryList,
  languageOptions,
  localStorage,
} from './language-options';

export function LanguageProvider({ children }) {
  const [userLanguage, setUserLanguage] = useState('en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : 'en';
      setUserLanguage(newLanguage);
      window.localStorage.setItem(localStorage, newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
