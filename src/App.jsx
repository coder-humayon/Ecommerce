
import './App.css'
import Category from './components/Category'
import Discounts from './components/Discounts'
import Macbook from './components/Macbook'
import Popular from './components/Popular'
import Product from './components/Product'
import BannerSlider from './components/slider/Slider'
import Summersale from './components/Summersale'

function App() {

  return (
    <>
    <BannerSlider/>
    <Macbook/>
    <Category/>
    <Product/>
    <Popular/>
    <Discounts/>
    <Summersale/>
    </>
  )
}

export default App
