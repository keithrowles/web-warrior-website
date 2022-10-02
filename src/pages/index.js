import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as style from '../styles/home.module.css'
import {GatsbyImage, getImage} from "gatsby-plugin-image"


  export default function Home( {data}) {
  // const { title, description } = data.site.siteMetadata
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section className={style.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <p>UX designer and web developer based in Brisbane</p>
          <Link className={style.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        
        <GatsbyImage image={image} alt="Banner" />

        
      </section>
    </Layout>
  )
}

// use a fragment in query
export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
      )
    }
  }
}
`

