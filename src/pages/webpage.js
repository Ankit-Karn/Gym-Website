import Navbar from '../molecules/nav/nav'
import AboutUsSection from '../molecules/about/AboutUsSection'
import Home from '../molecules/home/home'
import TrainerSection from '../molecules/trainer/TrainerSection'
import Price from '../price/price'
import Footer from '../molecules/footer/footer'

export default function Webpage(){
    return(
        <>
        <Navbar/>
        <Home/> 
        <AboutUsSection/>
        <TrainerSection/>
        <Price/>
        <Footer/>
        
       
        </>
    )
}