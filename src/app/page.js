import Header from './components/header/Header'
import BottomHeader from './components/header/BottomHeader'
import NavLinks from './components/header/NavLinks'
import HomeFooterSocial from './components/footer/home-footer/HomeFooterSocial'
import HomeFooterMenu from './components/footer/home-footer/HomeFooterMenu'
import HomeFooterPages from './components/footer/home-footer/HomeFooterPages'
import HomeFooterLastblock from './components/footer/home-footer/HomeFooterLastblock'
import { NewsSection } from './components/homeNewsSection/NewsSection'

export default function Home() {
  return (
    <>
      <main className='max-w-screen-maxW m-auto lg:px-[15px]'>
        {/* Header */}
        <Header />
        <BottomHeader />
        <NavLinks />
        {/* NewsSection */}

        <NewsSection />

        {/* Footer */}
        <HomeFooterSocial />
        <HomeFooterMenu />
        <HomeFooterPages />
      </main>
      <div className='bg-qatar_dark_bg '>
        <HomeFooterLastblock />
      </div>
    </>
  )
}
