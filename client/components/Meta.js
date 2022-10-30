import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Sudhanshu Ranjan" />
        <meta name="author" content="Spectre_7" />
        <meta name="twitter:title" content="Sudhanshu Ranjan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Sudhanss_u" />
        <meta name="twitter:creator" content="@Sudhanss_u" />
        <meta name="twitter:image" content="https://sudhanshu-ranjan.vercel.app/card.jpg" />
        <meta property="og:site_name" content="Sudhanshu Ranjan" />
        <meta name="og:title" content="Sudhanshu Ranjan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sudhanshu-ranjan.vercel.app/card.jpg" />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "defi-lib",
  keywords: 'web development, programming, frontend development',
  description: "De-fi Library",
}

export default Meta