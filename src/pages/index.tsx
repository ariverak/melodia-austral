import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section>
        <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl'>
            Melodia Austral
          </h1>
          <p className='mb-8 text-lg font-normal text-gray-5  00 lg:text-xl sm:px-16 lg:px-48'>
            Bienvenido a Melodia Austral
          </p>
        </div>
      </section>

      <footer className='bg-white rounded-lg m-4'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a
              href='https://flowbite.com/'
              className='flex items-center mb-4 sm:mb-0'
            >
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8 mr-3'
                alt='Flowbite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap'>
                Melodia Austral
              </span>
            </a>
            <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6 '>
                  About
                </a>
              </li>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='mr-4 hover:underline md:mr-6 '>
                  Licensing
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dar  k:border-gray-700 lg:my-8' />
          <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{' '}
            <a href='/' className='hover:underline'>
              Melodia Austral
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
