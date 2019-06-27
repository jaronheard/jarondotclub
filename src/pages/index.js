import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const allPosts = data.allPosts.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Jaron Heard"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Hi</h1>
        {allPosts.map(({ node }) => {
          return (
            <section
              style={{
                marginBottom: rhythm(2),
              }}
            >
              <h2
                style={{
                  marginBottom: rhythm(1 / 4),
                  color: "#AAA4AB",
                }}
              >
                {node.title}
              </h2>
            </section>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allPosts(limit: 1000) {
      edges {
        node {
          id
          link
          slug
          title
        }
      }
    }
  }
`
