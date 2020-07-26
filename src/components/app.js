import { LanguageProvider, LanguageSelector, Text } from './shared/language';

export default function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSelector />
        <Text id="home" />
      </div>
    </LanguageProvider>
  );
}
