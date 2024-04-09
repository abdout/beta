import React from 'react'
import Brand from './brand'
import Item from './item'

const Side = () => {
  return (
    <div className="fixed h-screen bg-gray-100 transition-all duration-200 ease-in-out w-16 hover:w-[11rem] group">
      <div className="pl-4 pt-6">
        <Brand />
      </div>
      <div className="mt-8">
        <Item />
      </div>
    </div>
  )
}

export default Side