import Header from './components/header/Header'
import BottomHeader from './components/header/BottomHeader'
import NavLinks from './components/header/NavLinks'
import HomeFooterSocial from './components/footer/home-footer/HomeFooterSocial'
import HomeFooterMenu from './components/footer/home-footer/HomeFooterMenu'

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      <BottomHeader />
      <NavLinks />

      {/* Footer */}
      <HomeFooterSocial />
      <HomeFooterMenu />
    </>
  )
}
