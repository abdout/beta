import React from 'react'
import { Icon } from "@iconify/react";

const Awesome = () => {
  return (
    <div>
        <h1>
            Awesome
        </h1>
        <p className='pt-1 w-[50rem]'>
            Explore the links below for tutorials, interviews, exams and approvals, respectively.                               
        </p>
        <div className='flex pt-4 gap-8 items-center'>
        <Icon icon={"ri:youtube-fill"} height="75" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"clarity:talk-bubbles-solid"} height="65" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"ph:exam-fill"} height="70" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        <Icon icon={"mingcute:certificate-fill"} height="65" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
        </div>
    </div>
  )
}

export default Awesome