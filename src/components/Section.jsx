import React, { useEffect } from 'react'
import { usePageTransition } from '../hooks/usePageTransition'

function Section({children}) {
  const {close} = usePageTransition();
  useEffect(() => {
    close()
  }, [])
  return (
    <section className='min-h-screen max-h-fit w-full flex pt-12 bg-background text-white'>{children}</section>
  )
}

export default Section