import Link from 'next/link'
import Layout from '../components/layout/layout'

const Custom404 = () => {
  return (
    <Layout>
      <div className="h-[calc(100vh-200px)] w-full flex flex-col items-center pt-[10vh] gap-6 md:gap-10">
        <h1 className="text-primary  font-secondary font-bold text-4xl md:text-6xl">
          Oops, sei perso!😱
        </h1>
        <p>
          {`Spiacenti, non siamo riusciti a trovare quello che cercavi. Torni a `}
          <Link className="text-primary cursor-pointer" href={'/'}>
            Home
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default Custom404
