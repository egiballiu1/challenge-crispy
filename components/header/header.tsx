import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const menuItem = [
    'font-primary',
    'text-secondary',
    'text-[18px]',
    'leading-8',
    'cursor-pointer',
    'transition',
    'ease-in-out',
    'delay-200',
    'md:ml-8',
    'tracking-widest',
    'font-normal',
    'relative',
  ]

  return (
    <div className="p-4 md:px-10 flex flex-row justify-between items-center absolute z-10 top-0 w-full min-h-[200px]">
      <Link href="/" className="logo-wrapper">
        <Image
          src="/assets/logo.gif"
          width={200}
          height={100}
          alt="Crisy Bacon logo"
        />
      </Link>

      <div className="menu-items-wrapper flex flex-col items-end md:flex-row md:items-start gap-4 font-normal">
        <Link href="/" className={classNames('menu-item', menuItem)}>
          Home
        </Link>
        <Link href="/services" className={classNames('menu-item', menuItem)}>
          Services
        </Link>
      </div>
    </div>
  )
}

export default Header
