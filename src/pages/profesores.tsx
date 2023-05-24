import * as React from 'react'
import { HeadFC, Link, PageProps, graphql, useStaticQuery } from 'gatsby'
import Layout from '../layout'
import dayjs from 'dayjs'
import { GatsbyImage } from 'gatsby-plugin-image'

const imageStyle = {
  width: 300,
  height: 300
}

const TeachersPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulTeacher {
        edges {
          node {
            fullname
            description {
              id
              description
            }
            image {
              gatsbyImage(
                width: 300
                height: 300
                placeholder: BLURRED
                formats: [WEBP]
              )
            }
          }
        }
      }
    }
  `)
  const teachers = data.allContentfulTeacher.edges

  return (
    <Layout>
      <section className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
            Nuestro Profesores
          </h1>
        </div>
      </section>
      <section className='flex flex-wrap justify-center max-w-screen-xl p-4 mx-auto'>
        {teachers.map((teacher: any) => (
          <>
            <div className='max-w-sm bg-white rounded-lg m-4'>
              <div className='flex justify-center w-full'>
                <GatsbyImage
                  image={teacher.node.image.gatsbyImage}
                  alt=''
                  style={imageStyle}
                />
              </div>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center'>
                    {teacher.node.fullname}
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {teacher.node.description.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </section>
    </Layout>
  )
}

export default TeachersPage

export const Head: HeadFC = () => <title>Melodia Austral Blog</title>
