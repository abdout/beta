'use client';
import Header from '@/component/atom/bar/header';
import { resrc } from '@/constant/header'

import React, { ReactNode } from 'react'

const Layout = (props: {children: ReactNode}) => {
  return (
    <div>
      <Header links={resrc} />
      <main className="mt-8">
      {props.children}
      </main>
    </div>
  )
}

export default Layout