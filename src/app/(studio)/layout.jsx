import React from 'react';

export const metadata = {
  title: 'Gift адміністратор',
  description: 'Gift панель адміністратора',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
