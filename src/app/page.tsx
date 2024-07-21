import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { PrimaryFeatures } from '@/components/Initiatives'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Events />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Contact />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
