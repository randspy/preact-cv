import { LanguageProvider } from './shared/language';
import './app.scss';

export default function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <section class="primary-lightest-bg-color">Home</section>
        <section class="primary-bg-color">Expertise</section>
        <section class="primary-lightest-bg-color">Skills</section>
        <section class="secondary-bg-color">Experience</section>
        <section class="primary-lightest-bg-color">Education</section>
        <section class="primary-bg-color">Contact</section>
      </div>
    </LanguageProvider>
  );
}
