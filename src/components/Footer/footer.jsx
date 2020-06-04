import React from "react";
import "./footer.scss";
import { graphql, useStaticQuery } from "gatsby"


const Footer = () => {
  const data = useStaticQuery(graphql`
      {
          allContentfulSocialImages {
              edges {
                  node {
                      image {
                          file {
                              url
                          }
                      }
                      alt
                  }
              }
          }
      }
  `)

  return (
    <footer className="footer__container">
      <nav>
        <ul className="footer__nav-list">
          { data.allContentfulSocialImages.edges.map(item => (
            <li key={item.node.alt}>
              <a href="/"><img src={item.node.image.file.url} alt={item.node.alt}/></a>
            </li>
          )) }
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
