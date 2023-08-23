import Header from './components/header/Header'
import BottomHeader from './components/header/BottomHeader'
import NavLinks from './components/header/NavLinks'
import HomeFooterSocial from './components/footer/home-footer/HomeFooterSocial'
import HomeFooterMenu from './components/footer/home-footer/HomeFooterMenu'
import HomeFooterPages from './components/footer/home-footer/HomeFooterPages'
import HomeFooterLastblock from './components/footer/home-footer/HomeFooterLastblock'
import { TopStories } from './components/homeNewsSection/TopStories'
import NewsCaption from './components/homeNewsSection/NewsCaption'
import AllNews from './components/homeNewsSection/AllNews'

export default function Home() {
  return (
    <>
      <main className='max-w-screen-maxW m-auto lg:px-[15px]'>
        {/* Header */}
        <Header />
        <BottomHeader />
        <NavLinks />
        {/* NewsSection */}
        <div className='lg:w-[95%] w-full'>
          <TopStories />
          <NewsCaption />
          <AllNews />
        </div>

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
