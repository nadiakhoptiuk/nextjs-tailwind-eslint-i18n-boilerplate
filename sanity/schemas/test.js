import { MdGTranslate } from 'react-icons/md';
import { defineField } from 'sanity';

const test = {
  name: 'test',
  title: 'Про нас тест',
  icon: MdGTranslate,
  description: 'Test Schema',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Мова',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description: 'Введіть заголовок',
      validation: rule =>
        rule.required().error("Заголовок обов'язковий для введення"),
    }),
    defineField({
      name: 'paragraph',
      title: 'Абзац',
      type: 'string',
      description: 'Введіть абзац',
      validation: rule =>
        rule.required().error("абзац обов'язковий для введення"),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare(select) {
      const { title, language } = select;

      return {
        title,
        subtitle: language.toUpperCase(),
      };
    },
  },
};

export default test;
