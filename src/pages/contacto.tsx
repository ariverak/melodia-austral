import * as React from 'react'
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby'
import Layout from '../layout'
import { GatsbyImage } from 'gatsby-plugin-image'

const imageStyle = {
  width: 300,
  height: 300
}

const TeachersPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulGeneral {
        phones
        address
        place {
          lat
          lon
        }
      }
    }
  `)

  const general = data.contentfulGeneral

  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${general.place.lon}%2C${general.place.lat}%2C${general.place.lon}%2C${general.place.lat}&layer=mapnik&marker=${general.place.lat}%2C${general.place.lon}`

  return (
    <Layout>
      <section className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
            Contactanos
          </h1>
        </div>
      </section>
      <section className='flex flex-wrap justify-center max-w-screen-xl p-4 mx-auto'>
        <div className='w-full'>
          <div className='w-full'>
            <h2 className='text-2xl font-bold'>Teléfonos</h2>
            <ul className='list-disc list-inside'>
              {general.phones.map((phone: string) => (
                <li className='my-4' key={phone}>
                  <a href={`tel:${phone}`} className='text-blue-500'>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className='flex flex-wrap justify-center max-w-screen-xl p-4 mx-auto'>
        <div className='w-full h-96'>
          <div className='w-full'>
            <h2 className='text-2xl font-bold'>Dirección</h2>
            <a
              href={mapUrl}
              target='_blank'
              rel='noreferrer'
              className='text-blue-500'
            >
              {general.address}
            </a>
          </div>
          <iframe
            className='w-full h-full mt-4'
            width={320}
            height={320}
            src={mapUrl}
            style={{ border: '1px solid black' }}
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default TeachersPage

export const Head: HeadFC = () => <title>Melodia Austral Blog</title>
