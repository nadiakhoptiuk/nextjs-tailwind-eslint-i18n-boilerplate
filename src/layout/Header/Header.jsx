import React from 'react';

// import { fetchTest } from '@/admin/requests/fetchTest';

export const Header = async () => {
  // const data = await fetchTest();

  return (
    <header className="relative z-20 pb-6 pt-[22px] md:py-9">
      <div className="container flex items-center justify-between">
        {/* <h2>{data.title}</h2> */}
        {/* <p>{data.paragraph}</p> */}
      </div>
    </header>
  );
};
