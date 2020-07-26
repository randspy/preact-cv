import { h } from 'preact';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { LanguageSelector } from './language-selector';
import { LanguageProvider } from './language-provider';

let windowSpy;
let wrapper;

beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get');
  wrapper = null;
});

afterEach(() => {
  windowSpy.mockRestore();
});

describe('LanguageSelector', () => {
  test('should wire component', () => {
    mountComponent();

    expect(wrapper.find(LanguageSelector)).toHaveLength(1);
  });

  test('should update language from the navigator property', () => {
    let setItem = jest.fn();
    windowSpy.mockImplementation(() => ({
      navigator: {
        language: 'fr-FR',
      },
      localStorage: {
        getItem: () => null,
        setItem,
      },
    }));

    mountComponent();

    expect(wrapper.find('select').props().value).toEqual('fr');
    expect(setItem).toHaveBeenCalledWith('current-lang', 'fr');
  });

  test('should update language from local storage', () => {
    let getItem = jest.fn();
    windowSpy.mockImplementation(() => ({
      localStorage: {
        getItem,
        setItem: () => null,
      },
    }));

    getItem.mockReturnValue('fr');
    mountComponent();

    expect(wrapper.find('select').props().value).toEqual('fr');
  });
});

function mountComponent() {
  act(() => {
    wrapper = mount(
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    );
  });

  wrapper.update();
}
