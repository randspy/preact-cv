import { createContext } from 'preact';

import { dictionaryList } from './language-options';

export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});
