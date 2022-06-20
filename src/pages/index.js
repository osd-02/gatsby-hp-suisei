import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import NewPost from "../components/new-post"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <NewPost />
      <NewPost />
      <NewPost />
    </Layout>
  )
}