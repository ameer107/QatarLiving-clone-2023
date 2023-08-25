import Header from '@/app/components/header/Header'
import BottomHeader from '@/app/components/header/BottomHeader'
import NavLinks from '@/app/components/header/NavLinks'
import HomeFooterSocial from '@/app/components/footer/home-footer/HomeFooterSocial'
import HomeFooterMenu from '@/app/components/footer/home-footer/HomeFooterMenu'
import HomeFooterPages from '@/app/components/footer/home-footer/HomeFooterPages'
import HomeFooterLastblock from '@/app/components/footer/home-footer/HomeFooterLastblock'
import { TopStories } from '@/app/components/homeNewsSection/TopStories'
import NewsCaption from '@/app/components/homeNewsSection/NewsCaption'
import AllNews from '@/app/components/homeNewsSection/AllNews'

export default function Home() {
  return (
    <>
      <main className='max-w-screen-maxW m-auto lg:px-[15px] font-bodyFont bg-qatar_body'>
        {/* Header */}
        <Header />
        <BottomHeader color="bg-qatar_button"/>
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
