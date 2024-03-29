/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { rhythm } from "../utils/typography"
import { socialLinks } from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            dev
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        marginBottom: rhythm(2.5),
      }}
    >
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 60,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          Written by <strong>{author}</strong> who lives and works in Austin, TX. Thoughts are his own.
        </p>
      </div>
      <div
        style={{
          textAlign: `center`,
        }}
      >
        <a 
          className={socialLinks}
          href={`https://twitter.com/${social.twitter}`}
        >
          <FontAwesomeIcon icon={faTwitter} title="Twitter" />
        </a>
        <a
          className={socialLinks}
          href={`https://github.com/${social.github}`}
          alt="github social link"
        >
          <FontAwesomeIcon icon={faGithub} title="GitHub" />
        </a>
        <a 
          className={socialLinks}
          href={`https://dev.to/${social.dev}`}
        >
          <FontAwesomeIcon icon={faDev} title="DEV" />
        </a>
        <a 
          className={socialLinks}
          href={`https://linkedin.com/in/${social.linkedin}`}
        >
          <FontAwesomeIcon icon={faLinkedinIn} title="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Bio
