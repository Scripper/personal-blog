import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Test = () => {
  const data = useStaticQuery(graphql`
      {
          allContentfulPost {
              totalCount
          }
      }
  `)
  console.log(data)
  return (
    <pre>{JSON.stringify(data, null, 4)}</pre>
  )
}

export default Test;
