import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

gsap.registerPlugin(useGSAP)

type SingleService = {
  id: string
  title: string
  description: string
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

type Props = {
  pagesData: PageProps
  servicesData: SingleService[]
}

const mainWrapper = [
  'flex',
  'flex-col',
  'md:max-w-screen-xl',
  'm-auto',
  'py-10',
  'px-5',
  'md:py-20',
  'items-end',
]

const ServicesCards = ({ pagesData, servicesData }: Props) => {
  const h3Refs = useRef<React.RefObject<HTMLHeadingElement>[]>([])

  useEffect(() => {
    h3Refs.current.forEach((ref) => {
      const h3 = ref.current
      if (h3) {
        gsap.set(h3, { transformPerspective: 1000 })

        const handleMouseEnter = () => {
          gsap.set(h3, { rotationX: 0 })
          gsap.to(h3, {
            rotationX: 360,
            color: '#d60c3e',
            duration: 0.8,
            ease: 'power3.out',
          })
        }

        const handleMouseLeave = () => {
          gsap.to(h3, {
            color: '#161515',
            duration: 0.8,
            ease: 'power3.out',
          })
        }

        // Add event listeners
        h3.addEventListener('mouseenter', handleMouseEnter)
        h3.addEventListener('mouseleave', handleMouseLeave)

        // Cleanup event listeners on component unmount
        return () => {
          h3.removeEventListener('mouseenter', handleMouseEnter)
          h3.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    })
  }, [])

  // Initialize refs
  useEffect(() => {
    h3Refs.current = pagesData.services.it.map(() =>
      React.createRef<HTMLHeadingElement>()
    )
  }, [pagesData.services.it])

  return (
    <div className={classNames(mainWrapper)}>
      {pagesData.services.it.map((id: string, index: number) => {
        const service = servicesData.find((service) => service.id === id)
        return (
          service && (
            <React.Fragment key={id}>
              <h3
                className="font-secondary text-secondary font-bold text-4xl tracking-[-0.1em] uppercase leading-7 cursor-pointer"
                ref={h3Refs.current[index]}
              >
                {service.title}
              </h3>
              <p>{service.description}</p>
            </React.Fragment>
          )
        )
      })}
    </div>
  )
}

export default ServicesCards
