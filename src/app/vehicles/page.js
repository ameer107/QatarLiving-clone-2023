"use client"
import Header from '@/app/components/header/Header'
import BottomHeader from '@/app/components/header/BottomHeader'
import CategoryLinks from '../components/vehicles/CategoryLinks'
import FilterArea from '../components/vehicles/FilterArea'
import VehicalsListing from '../components/vehicles/VehicalsListing'
import HomeFooterSocial from '@/app/components/footer/home-footer/HomeFooterSocial'
import HomeFooterMenu from '@/app/components/footer/home-footer/HomeFooterMenu'
import HomeFooterPages from '@/app/components/footer/home-footer/HomeFooterPages'
import HomeFooterLastblock from '@/app/components/footer/home-footer/HomeFooterLastblock'

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

          {/* Footer */}
          <HomeFooterSocial />
          <HomeFooterMenu />
          <HomeFooterPages />
        </main>
        <div className='bg-white'>
          <HomeFooterLastblock />
        </div>
      </div>
    </>
  )
}

export default Vehicals