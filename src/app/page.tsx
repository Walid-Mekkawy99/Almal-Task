import AlmalGTM from '@/components/AlmalGTM'
import Home from '@/components/Home'
import About from '@/components/About'
import React from 'react'
import HeroLanding from '@/components/HeroLanding'
import HeroSection from '@/components/HeroSection'
import ImageCarousel from '@/components/ImageCarousel'
function page() {
  return(
    <>
     {/*________________ Home page_____________ */}
      <HeroLanding/>
      {/* <Home/> */}
    {/*________________ sec page_____________ */}
      {/* <AlmalGTM/> */}
      <HeroSection/>
    {/*________________ thr page_____________ */}
      <About/>
      <ImageCarousel/>
    </>
  )
}

export default page