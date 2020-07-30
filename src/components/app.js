import { LanguageProvider } from './shared/language';
import './app.scss';
import Menu from './page/menu/menu';
import Home from './page/home/home';

export default function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Menu />
        <Home />
        <section class="primary-dark-bg-color">Expertise</section>
        <section class="primary-lightest-bg-color">Skills</section>
        <section class="secondary-bg-color">Experience</section>
        <section class="primary-lightest-bg-color">Education</section>
        <section class="primary-dark-bg-color">Contact</section>
      </div>
    </LanguageProvider>
  );
}
