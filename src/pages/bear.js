import React from "react"
import { graphql } from "gatsby"

import { rhythm } from "../utils/typography"

class Bear extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

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
            <a href="bear://x-callback-url/untagged?show_window=yes">
              🐻 Inbox
            </a>
          </h2>
        </section>
    )
  }
}

export default Bear

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
