// const path = require('path')
//
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   // Query for markdown nodes to use in creating pages.
//   const result = await graphql(
//     `
//       {
//           allContentfulPost {
//               nodes {
//                   title
//               }
//           }
//       }
//     `
//   )
//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }
//   // Create pages for each markdown file.
//   const blogPostTemplate = path.resolve(`src/components/test.jsx`)
//   result.data.allContentfulPost.edges.forEach(({ node }) => {
//     const path = node.title
//     createPage({
//       path,
//       component: blogPostTemplate,
//       context: {
//         pagePath: path,
//       },
//     })
//   })
// }
