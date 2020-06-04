import React from "react";
import "./CategoryPage.scss";
import Layout from "../../components/layout"
import PostPreview from "../../components/PostPreview/PostPreview"

const CategoryPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <div className="category-page__wrapper">
        <h2>{props.pathContext.category} latest news !</h2>
        <div className="category-page__container">
        { props.pathContext.content.map(item => (
          <PostPreview
            key={item.id}
            link={`${item.category}/${item.url}`}
            title={item.title}
            date={item.publishData}
            img={item.headerImage.file.url}
          />
        )) }
        </div>
      </div>
    </Layout>
  )
}

export default CategoryPage;
