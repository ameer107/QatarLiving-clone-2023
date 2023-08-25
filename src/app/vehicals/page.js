"use client"
import Header from '@/app/components/header/Header'
import BottomHeader from '@/app/components/header/BottomHeader'
import CategoryLinks from '../components/vehicals/CategoryLinks'
import FilterArea from '../components/vehicals/FilterArea'
import VehicalsListing from '../components/vehicals/VehicalsListing'

const Vehicals = () => {
  return (
    <>
      <main className='max-w-screen-maxW m-auto lg:px-[15px] font-bodyFont bg-qatar_body'>
        {/* Header */}
        <Header />
        <BottomHeader color="bg-qatar_green" />
        <CategoryLinks />
        <FilterArea />
        <VehicalsListing />
      </main>
    </>
  )
}

export default Vehicals