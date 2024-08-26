import EntryAnimation from '../../components/animations/entry-animation'
import Layout from '../../components/layout/layout'
import SEO from '../../components/seo/seo'
import { fetchData } from '../../lib/datocms'

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

export default function Services({
  pagesData,
  servicesData,
  uploadMedia,
}: Props) {
  return (
    <>
      <SEO title="Services - Crispy Bacon" description="" />

      <Layout>
        {/* {console.log(servicesData)} */}
        <EntryAnimation
          pagesData={pagesData}
          servicesData={servicesData}
          uploadMedia={uploadMedia}
        />
        <h1
          className="text-primary text-center font-secondary font-bold text-2xl uppercase md:text-8xl tracking-[-0.1em] md:max-w-screen-xl mb-0 ml-auto mr-auto z-[0]"
          style={{ fontSize: 'clamp(2rem, 9vw, 7rem)' }}
        >
          {pagesData.title.it}
        </h1>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const media = await fetchData({
    query: `{
      allUploads {
        id
        url
      }
    }`,
  })

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
          content
          technologies
          image {
            url
          }
        }
      }
    }`,
  })

  return {
    props: {
      pagesData: pagesData[0],
      servicesData: servicesData,
      uploadMedia: media,
    },
  }
}
