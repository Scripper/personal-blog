import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Test = () => {
  const data = useStaticQuery(graphql`
      {
          allContentfulPost {
              totalCount
              nodes {
                  title
                  id
                  childContentfulPostDescriptionTextNode {
                      description
                  }
              }
          }
      }
  `)
  console.log(data)
}

export default Test;
