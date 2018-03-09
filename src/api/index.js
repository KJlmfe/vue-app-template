import Cookie from 'js-cookie';

export const getLocale = () => (
  Cookie.get('locale') ||
  (
    navigator.language ||
    navigator.browserLanguage ||
    navigator.userLanguage
  ).toLowerCase()
);

export const setLocale = (locale) => {
  Cookie.set('locale', locale, { expires: 365 });
};
