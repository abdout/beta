'use client';
import Awesome from '@/component/docs/home/awesome';
import Intro from '@/component/docs/home/intro';
import Navbar from '@/component/docs/layout/navbar';

import React from 'react';

const Docs = () => {
  
  return (
    <div className='space-y-8'>
      <Intro />
      <Awesome />
    </div>
  );
};

export default Docs;