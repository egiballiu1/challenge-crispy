import EntryAnimation from '../../components/animations/entry-animation'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo/seo'
import { fetchData } from '../../lib/datocms'

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

export async function getStaticProps() {
  const pagesData = await fetchData({
    query: `{
      page {
        title
        services {
          id
        }
      }
    }`,
  })

  const servicesData = await fetchData({
    query: `{
      page {
        services {
          id
          title
          description
        }
      }
    }`,
  })

  return {
    props: { pagesData: pagesData[0], servicesData: servicesData },
  }
}

export default function Services({ pagesData, servicesData }: Props) {
  return (
    <>
      <SEO title="Services - Crispy Bacon" description="" />
      {/* {console.log(servicesData)} */}
      <Layout>
        <h2 className="text-primary">{pagesData.title.it}</h2>

        <EntryAnimation pagesData={pagesData} servicesData={servicesData} />
      </Layout>
    </>
  )
}
