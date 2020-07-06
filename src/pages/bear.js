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
          margin: rhythm(1 / 2),
        }}
      >
        <ul
          style={{
            marginBottom: rhythm(1 / 4),
            color: "#AAA4AB",
            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
          }}
        >
          <li>
            <a
              href="bear://x-callback-url/untagged?show_window=yes"
              style={{ color: "#AAA4AB" }}
            >
              🐻 Inbox
            </a>
          </li>
          <li>
            <a
              href="https://mail.superhuman.com/jaron@civicsoftwarefoundation.org#app"
              style={{ color: "#AAA4AB" }}
            >
              🦸‍♀️Inbox
            </a>
          </li>
        </ul>
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
