import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

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

const mainWrapper = [
  'md:max-w-screen-xl',
  'm-auto',
  'py-10',
  'px-5',
  'md:py-0',
  'grid',
]

const ServicesCards = ({ pagesData, servicesData, uploadMedia }: Props) => {
  // const h3Refs = useRef<React.RefObject<HTMLHeadingElement>[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  // useEffect(() => {
  //   h3Refs.current.forEach((ref) => {
  //     const h3 = ref.current
  //     if (h3) {
  //       gsap.set(h3, { transformPerspective: 1000 })

  //       const handleMouseEnter = () => {
  //         gsap.set(h3, { rotationX: 0 })
  //         gsap.to(h3, {
  //           rotationX: 360,
  //           color: '!#d60c3e',
  //           duration: 0.8,
  //           ease: 'power3.out',
  //         })
  //       }

  //       const handleMouseLeave = () => {
  //         gsap.to(h3, {
  //           color: '#fff',
  //           duration: 0.8,
  //           ease: 'power3.out',
  //         })
  //       }

  //       // Add event listeners
  //       h3.addEventListener('mouseenter', handleMouseEnter)
  //       h3.addEventListener('mouseleave', handleMouseLeave)

  //       // Cleanup event listeners on component unmount
  //       return () => {
  //         h3.removeEventListener('mouseenter', handleMouseEnter)
  //         h3.removeEventListener('mouseleave', handleMouseLeave)
  //       }
  //     }
  //   })
  // }, [])
  // useEffect(() => {
  //   h3Refs.current = pagesData.services.it.map(() =>
  //     React.createRef<HTMLHeadingElement>()
  //   )
  // }, [pagesData.services.it])

  const handleActiveService = (index: number) => {
    setActiveIndex(index)

    gsap.from('.service-content', {
      duration: 2,
      opacity: 1,
    })
    gsap.to('.content-container', {
      zIndex: 8,
    })
  }

  useEffect(() => {
    if (activeIndex !== -1) {
      const serviceRef = serviceRefs.current[activeIndex]
      const moreInfoElement = serviceRef?.querySelector('.more-info')

      if (moreInfoElement) {
        gsap.set(moreInfoElement, {
          autoAlpha: 0,
          y: 0,
          height: 0,
          transformOrigin: 'left center',
        })

        ScrollTrigger.create({
          trigger: moreInfoElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          // markers: true,
          onEnter: () => {
            gsap.to(moreInfoElement, {
              autoAlpha: 1,
              y: 0,
              height: 'auto',
              duration: 1,
              ease: 'power3.out',
            })
          },
          onLeaveBack: () => {
            gsap.to(moreInfoElement, {
              autoAlpha: 0,
              y: 50,
              height: 0,
              duration: 1,
              ease: 'power3.out',
            })
          },
        })
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [activeIndex])

  return (
    <div className={classNames(mainWrapper)}>
      <div className="content-container absolute top-0 left-0 w-full h-screen bg-secondary-75 -z-[1]">
        {pagesData.services.it.map((id: string, index: number) => {
          const service = servicesData.find((service) => service.id === id)
          const media = service
            ? uploadMedia.find(
                (mediaItem) => mediaItem.id === service.image.imageId
              )
            : null
          return (
            service && (
              <div
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  serviceRefs.current[index] = el
                }}
                className={`service-content absolute ${
                  activeIndex === index ? 'flex' : 'hidden'
                } top-[200px] h-[calc(100vh-200px)] p-6 md:p-20 pb-0 md:pb-0 flex items-end overflow-auto`}
                style={{
                  position: 'relative',
                  zIndex: activeIndex === index ? 10 : 0,
                }}
              >
                <div className="service-description">
                  <p className=" text-white md:max-w-[60%] font-primary pb-4 text-3xl">
                    {service?.description}
                  </p>

                  <h3 className=" text-primary font-primary rounded text-lg pb-10">
                    Scorri per altro
                  </h3>

                  <div className="more-info opacity-0 md:w-2/3">
                    <p
                      className="text-white text-xl"
                      dangerouslySetInnerHTML={{ __html: service.content }}
                    ></p>
                    <br />
                    <h3 className=" text-primary font-primary rounded text-lg pt-6">
                      Technologie che utilizziamo sono:
                    </h3>
                    <p
                      className="text-white text-xl"
                      dangerouslySetInnerHTML={{ __html: service.technologies }}
                    />
                  </div>

                  {media && media.url && (
                    <img
                      src={media.url}
                      alt={service?.title}
                      className="w-full h-auto"
                    />
                  )}
                </div>
              </div>
            )
          )
        })}
      </div>
      <div className="title-container z-50 flex flex-col items-start md:items-end ">
        {pagesData.services.it.map((id: string, index: number) => {
          const service = servicesData.find((service) => service.id === id)
          return (
            service && (
              <div key={id} className="service-title">
                <h3
                  className={classNames(
                    `${activeIndex === index ? '!text-primary' : 'text-white'} font-secondary font-bold text-3xl md:text-4xl tracking-[-0.1em] uppercase leading-7 cursor-pointer`
                  )}
                  // ref={h3Refs.current[index]}
                  onClick={() => handleActiveService(index)}
                >
                  {service.title}
                </h3>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

export default ServicesCards
