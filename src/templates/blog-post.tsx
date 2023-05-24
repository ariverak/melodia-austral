import * as React from 'react'
import { HeadFC, PageProps, graphql, useStaticQuery } from 'gatsby'
import Layout from '../layout'
import { renderPostBody } from '../utils/renderPostBody'

interface BlogPostTemplateProps {
  data: {
    contentfulPost: {
      title: string
      subtitle: string
      image: {
        url: string
      }
      body: {
        raw: string
      }
    }
  }
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
  const { contentfulPost: post } = data
  return (
    <Layout>
      <h1 className='text-4xl font-bold text-center mt-4 mb-4'>
        {post?.title}
      </h1>
      <h2 className='text-xl text-center mb-4'>{post.subtitle}</h2>
      <div className='flex justify-center mt-4 mb-8'>
        {post.image?.url && (
          <img src={post.image.url} width={350} height={350} alt='' />
        )}
      </div>
      <article>{post.body && renderPostBody(post.body)}</article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      title
      subtitle
      image {
        url
      }
      body {
        raw
      }
    }
  }
`

export default BlogPostTemplate

export const Head: HeadFC = () => <title>Blog Post</title>
