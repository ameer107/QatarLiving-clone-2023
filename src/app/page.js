import Header from './components/header/Header'
import BottomHeader from './components/header/BottomHeader'

export default function Home() {
  return (
    <>
      <Header />
      <BottomHeader className="hidden lg:block"/>
    </>
  )
}
