import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

const footerWrapper = [
  'grid',
  'md:grid-cols-3',
  'md:max-w-screen-xl',
  'm-auto',
  'py-10',
  'px-5',
  'md:pt-20',
  'md:pb-32',
  'gap-8',
  'md:gap-14',
]

const Footer = () => {
  return (
    <div className="bg-secondary-75">
      <div className={classNames('footer-wrapper', footerWrapper)}>
        <div className="logo-container">
          <div className="logo-wrapper mb-8 md:mb-10">
            <h3 className="text-white text-2xl font-primary tracking-tighter">
              Crispy Bacon srl © 2024
            </h3>
            <span className="text-white text-ml font-primary tracking-tighter">
              Part of Be Group
            </span>
          </div>
          <p className="text-white text-base font-primary tracking-tight  font-light md:pr-8">
            Società soggetta a controllo e coordinamento Be Shaping the Future
            SPA
          </p>
        </div>

        <div className="links-container flex flex-col">
          <Link
            href="https://crispybacon.it/privacy-policy/"
            target="_blank"
            className="uppercase mb-6 text-white font-primary cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://crispybacon.it/cookie-policy/"
            target="_blank"
            className="uppercase mb-6 text-white font-primary cursor-pointer"
          >
            Cookie Policy
          </Link>
        </div>

        <div className="socials-addres-container">
          <div className="socials-wrapper flex gap-4 mb-8 md:mb-10">
            <Link
              href="https://www.linkedin.com/company/crispy-bacon/mycompany/"
              target="_blank"
            >
              <Image
                width="35"
                height="35"
                src={'/assets/linkedin.svg'}
                alt="linkedin logo white"
              />
            </Link>
            <Link
              href="https://www.facebook.com/crispybaconstudio"
              target="_blank"
            >
              <Image
                width="35"
                height="35"
                src={'/assets/facebook.svg'}
                alt="facebbok logo white"
              />
            </Link>
          </div>
          <div className="address-wrapper">
            <h5 className="mb-4 text-white font-primary">Sede legale</h5>
            <p className="pb-2 text-white font-primary font-light text-sm leading-5 tracking-tight">
              Viale XI Febbraio, 1B 36061
              <br />
              Bassano del Grappa (VI)
              <br />
              P.iva 04223500242 REA VI-388603
              <br />
              Capitale sociale: 10.000 i.v.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
