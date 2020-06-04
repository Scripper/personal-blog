import React from "react";
import "./LongReadPage.scss";
import Layout from "../../components/layout"


const LongReadPage = (props) => {
  console.log(props.pathContext.content);
  const { title, headerImage, description } = props.pathContext.content;
  return (
    <Layout>
       <div className="long-read__container">
         <h2>{title}</h2>
         <img src={headerImage.file.url} alt=""/>
         <p>{description.description}</p>
       </div>
    </Layout>
  )
}

export default LongReadPage;
