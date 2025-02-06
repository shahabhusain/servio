import Buisness from '@/components/home/Buisness'
import Footer from '@/components/home/Footer'
import FreeToJion from '@/components/home/FreeToJion'
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import SignUp from '@/components/home/SignUp'
import Slider from '@/components/home/Slider'
import Work from '@/components/home/Work'

const page = () => {
  return (
    <div >
        <Header />
        <Hero />
        <Slider />
        <Services />
        <Work />
        <Buisness />
        <FreeToJion />
        <SignUp />
        <Footer />
    </div>
  )
}

export default page