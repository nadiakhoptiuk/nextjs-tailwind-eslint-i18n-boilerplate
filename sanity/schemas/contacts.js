import { defineField } from 'sanity';

const contacts = {
  name: 'contacts',
  title: 'Контакти',
  description: 'Contacts Schema',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Номер телефона',
      type: 'string',
      description: "Введіть номер телефона в форматі '+380981234567'",
      validation: rule =>
        rule.required().error("Поле номера телефона обов'язковe для введення"),
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      description: 'Введіть E-mail',
      validation: rule =>
        rule.required().error("Поле e-mail обов'язковe для введення"),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Введіть посилання на сторінку Instagram',
      validation: rule =>
        rule
          .required()
          .error("Поле посилання на instagram обов'язковe для введення"),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'Введіть посилання на сторінку Facebook',
      validation: rule =>
        rule
          .required()
          .error("Поле посилання на facebook обов'язковe для введення"),
    }),
  ],
};

export default contacts;
