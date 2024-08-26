import Footer from '../footer/footer'
import Header from '../header/header'
import '../../tailwind.css'
import classNames from 'classnames'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const mainWrapper = ['m-auto', 'relative']

const Layout = ({ children }: Props) => {
  return (
    <div className={classNames('page-wrapper relative')}>
      <Header />

      <main
        className={classNames(
          mainWrapper,
          'layout-container pt-[200px] md:pt-[240px] h-screen flex flex-col justify-between'
        )}
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
