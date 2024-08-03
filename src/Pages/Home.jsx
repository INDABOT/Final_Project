import BestSeller from "../Components/SecondHero/SecondHero"
import Collections from "../Components/Middle/Middle"
import Hero from "../Components/Hero/Hero"
import Header from "../Layouts/Header/Header"
import RecentView from "../Components/RecentView/RecentView"
import ProductCard from "../Layouts/ProductCard/ProductCard"
import Footer from "../Layouts/Footer/Footer"

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Collections />
        <BestSeller />
        <RecentView />
        <ProductCard />
        <Footer />
    </div>
  )
}

export default Home