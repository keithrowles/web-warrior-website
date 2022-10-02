import React from 'react'
import Layout from '../components/Layout'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as style from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {

    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    const image = getImage(featuredImg.childImageSharp.gatsbyImageData)

  return (
    <Layout>
        <div className={style.details}>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={style.featured}>
                <GatsbyImage image={image} alt="Banner" />
            </div>
            <div className={style.html} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  )
}


export const query = graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`