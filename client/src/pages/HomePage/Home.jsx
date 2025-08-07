import React from 'react'
import { Header } from '../../widgets/layout/Header/Header'
import DaisyCarousel from '../../widgets/Carousel/DaisyCarousel'
import ItemsFilter from '../../features/CategoryFilter/ItemsFilter'
export const Home = () => {
  return (
    <>
      <Header />
      <DaisyCarousel />
      <ItemsFilter />
    </>
  )
}
