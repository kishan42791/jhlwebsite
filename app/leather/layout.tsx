'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/app/fur/components/page-illustration'
import Header from '@/app/fur/components/ui/header'
import Footer from '@/app/fur/components/ui/footer'

export default function HairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <Header />
      <main className='grow'>
        <PageIllustration />

        {children}
      </main>

      <Footer />
    </>
  )
}
