import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { RefObject, useEffect, useRef, useState } from 'react'
import ServicesCards from '../services-cards/services-cards'

gsap.registerPlugin(useGSAP)

type SingleService = {
  id: string
  title: string
  description: string
  content: string
  technologies: string
  image: {
    imageId: string
  }
}

type ServicesProps = {
  it: string[] | any
}

type PageProps = {
  title: {
    it: string
  }
  services: ServicesProps
}

type UploadMedia = {
  id: string
  url: string
}

type Props = {
  pagesData: PageProps
  servicesData: SingleService[]
  uploadMedia: UploadMedia[]
}

const EntryAnimation = ({ pagesData, servicesData, uploadMedia }: Props) => {
  const mainContainer: RefObject<HTMLDivElement> = useRef(null)
  const title = useRef<HTMLHeadingElement>(null)
  const contentContainer = useRef<HTMLDivElement>(null)

  const splitTextToSpans = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="title-char">
        {char}
      </span>
    ))
  }

  useEffect(() => {
    if (mainContainer.current && title.current && contentContainer.current) {
      const tl = gsap.timeline()
      const chars = gsap.utils.toArray('.title-char')

      tl.fromTo(
        mainContainer.current,
        { y: '100vh' },
        {
          y: '0',
          duration: 2,
          ease: 'power4.out',
        }
      )
        .fromTo(
          chars,
          { y: '100vh', opacity: 0 },
          {
            y: '0',
            opacity: 1,
            duration: 0.4,
            ease: 'power4.out',
            stagger: {
              each: 0.1,
              from: 'random',
            },
          },
          '-=0.5'
        )
        .set(
          contentContainer.current,
          { autoAlpha: 1 }, //change visibility and opacityr
          '-=1'
        )
        .to(
          mainContainer.current,
          {
            y: '-100vh',
            duration: 2,
            ease: 'power4.in',
          },
          '-=0.5'
        )
    }
  }, [mainContainer, title, contentContainer])

  return (
    <>
      <div
        ref={mainContainer}
        className="page-entry-animation w-screen h-screen bg-white absolute left-0 right-0 top-0 flex items-end justify-center z-[1]"
      >
        <h2
          ref={title}
          className="font-primary whitespace-nowrap text-primary text-center font-bold text-2xl uppercase md:text-8xl tracking-[-0.1em] md:max-w-screen-xl mb-0 ml-auto mr-auto"
          style={{ fontSize: 'clamp(3rem, 14vw, 11rem)' }}
        >
          {splitTextToSpans('I nostri servizi')}
        </h2>
      </div>

      <div
        ref={contentContainer}
        style={{ opacity: 0, visibility: 'hidden' }}
        className="services-content"
      >
        <ServicesCards
          pagesData={pagesData}
          servicesData={servicesData}
          uploadMedia={uploadMedia}
        />
      </div>
    </>
  )
}

export default EntryAnimation
