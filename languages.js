const languages = [
  { id: 'en', title: 'English (US)' },
  { id: 'uk', title: 'Ukrainian (UK)', isDefault: true },
];

export const i18n = {
  languages,
  base: languages.find(item => item.isDefault).id,
};
