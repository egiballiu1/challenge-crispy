import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()

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

  const getMenuItemClass = (path: string) =>
    classNames('menu-item', menuItem, {
      active: pathname === path,
    })

  return (
    <div className="p-4 md:px-10 flex flex-row justify-between items-center bg-white absolute z-10 top-0 w-full min-h-[150px] shadow-md">
      <Link href="/" className="logo-wrapper max-w-[150px]">
        <Image
          src="/assets/logo.gif"
          width={200}
          height={100}
          alt="Crisy Bacon logo"
        />
      </Link>

      <div className="menu-items-wrapper flex flex-col items-end md:flex-row md:items-start gap-4 font-normal">
        <Link href="/" className={getMenuItemClass('/')}>
          Home
        </Link>
        <Link href="/services" className={getMenuItemClass('/services')}>
          Services
        </Link>
      </div>
    </div>
  )
}

export default Header
