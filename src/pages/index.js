import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This will be a site where I tinker around and talk about myself.</p>
    <p>It is currently under construction.</p>
  </Layout>
)

export default IndexPage
