import * as React from 'react'
import { HeadFC, Link, PageProps, graphql, useStaticQuery } from 'gatsby'
import Layout from '../layout'
import dayjs from 'dayjs'
import { GatsbyImage } from 'gatsby-plugin-image'

const imageStyle = {
  width: 120,
  height: 120
}

const BlogPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPost {
        edges {
          node {
            title
            subtitle
            slug
            image {
              gatsbyImage(
                width: 120
                height: 120
                placeholder: BLURRED
                formats: [WEBP]
                quality: 40
              )
            }
          }
        }
      }
    }
  `)
  const posts = data.allContentfulPost.edges

  return (
    <Layout>
      <section className='bg-white'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl'>
            Melodia Austral Blog
          </h1>
        </div>
      </section>

      <ol className='relative border-l border-gray-200 dark:border-gray-700 pl-4'>
        {posts.map((post: any) => (
          <>
            <li className='mb-10 ml-6 flex'>
              <div style={{ width: 120, height: 120 }}>
                <GatsbyImage
                  image={post.node.image.gatsbyImage}
                  alt=''
                  style={imageStyle}
                />
              </div>
              <div className='mb-10 ml-6 flex flex-col'>
                <span className='absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-white dark:ring-gray-900'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
                    ></path>
                  </svg>
                </span>
                <Link to={post.node.slug}>
                  <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900'>
                    {post.node.title}
                  </h3>
                </Link>
                <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                  Publicado {dayjs(post.node.createdAt).format('DD/MM/YYYY')}
                </time>
                <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                  {post.node.subtitle}
                </p>
              </div>
            </li>
          </>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Melodia Austral Blog</title>
