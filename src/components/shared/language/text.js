import { useContext } from 'preact/hooks';
import { LanguageContext } from './language-context';

export function Text({ id }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[id] || id;
}
