import React from "react"
import Layout from "../../templates/layout"
import PostLink from "../../molecules/post-link"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      {data.allContentfulLivePost.edges.map(edge => (
        <PostLink key={edge.node.slug} post={edge.node} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulLivePost {
      edges {
        node {
          id
          title
          images {
            id
            file {
              url
            }
          }
          postDate
        }
      }
    }
  }
`
