const path = require('path')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const posts = await graphql(`
      {
          allContentfulPost {
              edges {
                  node {
                      category
                      title
                      description {
                          description
                      }
                      id
                      publishData
                      longRead {
                          longRead
                      }
                      headerImage {
                          file {
                              url
                          }
                      }
                      url
                  }
              }
          }
      }
  `)
  const groupItemsByCategory = ( items ) => {
    const groupedItems= [];
    const addedCategories = [];
    items.data.allContentfulPost.edges.forEach(item => {
      const groupIndex = addedCategories.indexOf(item.node.category);
      if (groupIndex !== -1) {
        groupedItems[groupIndex].items.push(item.node);
      } else {
        addedCategories.push(item.node.category);
        groupedItems.push({category: item.node.category, items: [item.node]})
      }
    });
    return groupedItems;
  };
  const sortedData = await groupItemsByCategory(posts);

  const LongReadPage = path.resolve(`src/templates/LongReadPage/LongReadPage.jsx`);
  const CategoryPage = path.resolve(`src/templates/CategoryPage/CategoryPage.jsx`);

  sortedData.forEach((posts) => {
    const path = `/${posts.category}/`
    createPage({
      path,
      component: CategoryPage,
      context: {
        content: posts.items,
        category: posts.category
      },
    })
    posts.items.forEach((post) => {
      const path = `/${posts.category}/${post.url}`
      createPage({
        path,
        component: LongReadPage,
        context: {
          content: post,
        },
      })
    })
  })
};
