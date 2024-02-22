import React from 'react'

function Section({children}) {
  return (
    <section className='min-h-screen max-h-fit w-full flex pt-12 bg-background text-white'>{children}</section>
  )
}

export default Section