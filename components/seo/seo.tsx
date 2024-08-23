import Head from 'next/head'

type Props = {
  title: string
  description: string
}

const SEO = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon/favicon.png" />
    </Head>
  )
}

export default SEO
