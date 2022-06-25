import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import PostLink from "../../components/post-link"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
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
