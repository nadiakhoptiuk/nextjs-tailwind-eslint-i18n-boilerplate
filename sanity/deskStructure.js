export const myStructure = S =>
  S.list()
    .title('Контент')
    .items([
      ...S.documentTypeListItems(),

      // S.listItem()
      //   .title('Про нас')
      //   .child(
      //     S.document().schemaType('test').title('Про нас').documentId('test'),
      //   )
      //   .icon(() => '🌸'),

      // S.listItem()
      //   .title('Контакти')
      //   .child(
      //     S.document()
      //       .schemaType('contacts')
      //       .title('Контакти')
      //       .documentId('contacts'),
      //   )
      //   .icon(() => '📞'),
    ]);
