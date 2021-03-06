import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/global/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Sariyanta</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <>
        <Navigation />
        <section className='relative bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <h1 className='text-4xl'>
              <span className='text-indigo-600 font-bold'>Energy </span>
              <span className='text-black'>Big</span>
            </h1>
          </div>
        </section>
      </>
    </>
  )
}
