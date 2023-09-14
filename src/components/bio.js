/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">

      {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}

      {author?.name && (
        <div>
        <p>
          A Jewish podcast about movies, and a movie podcast about Judaism.</p>
        <p>
          Subscribe now on <Link to="https://podcasts.apple.com/us/podcast/the-jewish-frame/id1591644061">Apple Podcasts</Link>, or <Link to="https://open.spotify.com/show/4IVaDVI26MgTw8zFjx5YRd">Spotify</Link>, or just search for The Jewish Frame wherever you listen.
        </p>
        </div>
      )}
    </div>
  )
}

export default Bio
