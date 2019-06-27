import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { strikethrough } from "ansi-colors"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const description = (
      <p>
        <em>
          <small>all posts are collaborative g**gle docs</small>
        </em>
      </p>
    )
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {header}
          {description}
        </header>
        <main>{children}</main>
        <footer>
          <a
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            href="https://github.com/jaronheard/jarondotclub"
          >
            😹 <em>GitHub</em>
          </a>
          <br />
          🤙 <em>+1-971-998-7180</em>
        </footer>
      </div>
    )
  }
}

export default Layout
