import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as style from '../../styles/projects.module.css'
import {GatsbyImage, getImage} from "gatsby-plugin-image"

export default function Projects({data}) {

  console.log(data);
  // projects array
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  

  return (
    <Layout>
      <div className={style.portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects and Websites I have created.</h3>
          <div className={style.projects}>
            {projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
          </div>
          <p>Like what you see? email me at {contact} for a quote.</p>
      </div>
    </Layout>
  )
}

// export page query

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        date
        thumb {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`