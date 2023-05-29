import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section>
        <div className='bg-blue-100 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>
            Melodia Austral
          </h1>
          <p className='mb-8 text-lg font-normal text-gray-5  00 lg:text-xl sm:px-16 lg:px-48'>
            Bienvenido a Melodia Austral
          </p>
        </div>
      </section>


    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
