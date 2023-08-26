"use client"
import Header from '@/app/components/header/Header'
import BottomHeader from '@/app/components/header/BottomHeader'
import CategoryLinks from '../components/vehicles/CategoryLinks'
import FilterArea from '../components/vehicles/FilterArea'
import VehicalsListing from '../components/vehicles/VehicalsListing'

const Vehicals = () => {
  return (
    <>
      <div className='font-bodyFont bg-[#ebebeb]'>
        <main className='max-w-screen-maxW m-auto lg:px-[15px]'>
          {/* Header */}
          <Header />
          <BottomHeader color="bg-qatar_green" />
          <CategoryLinks />
          <FilterArea />
          <VehicalsListing />
        </main>
      </div>
    </>
  )
}

export default Vehicals