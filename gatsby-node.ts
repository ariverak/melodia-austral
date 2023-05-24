// @ts-check
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
import { GatsbyNode } from 'gatsby';
import path from "path"


export const createPages: GatsbyNode['createPages'] = async function ({ graphql, actions }) {
  const { data } = await graphql<Queries.Query>(`
   query BlogPosts {
      allContentfulPost {
        edges {
          node {
            slug
						title
          }
        }
      }
    }
  `)
	const posts = data?.allContentfulPost.edges;
  posts?.forEach((post: any, index: number) => {
    const slug = post.node.slug
		const previous = index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;
    actions.createPage({
      path: `blog/${slug}`,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: { slug: slug, previous, next }
    })
  })
}
