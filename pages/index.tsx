import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Home = () => {
  useGSAP(() => {
    gsap.from('.logo', {
      rotation: 360,
      transformOrigin: '50% 50%',
      onComplete: () => {
        gsap.to('.logo', {
          scale: 1.5,
          transformOrigin: '50% 50%',
          delay: 0.3,
        })
      },
    })
  })

  return (
    <>
      <SEO
        title="Crispy Bacon - Tecnologie digital per esperienze memorabili"
        description=""
      />

      <Layout>
        <div className="h-[calc(100vh-200px)] w-full flex flex-col items-center pt-[10vh] gap-6 md:gap-10">
          <h1 className="text-primary uppercase font-secondary font-bold text-4xl md:text-8xl">
            Challenge
          </h1>
          <Image
            className="logo"
            src={'/favicon/favicon.png'}
            alt="CB logo"
            width={100}
            height={100}
          />
        </div>
      </Layout>
    </>
  )
}

export default Home
