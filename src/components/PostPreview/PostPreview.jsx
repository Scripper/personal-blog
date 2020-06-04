import React from "react";
import "./PostPreview.scss";
import { Link } from "gatsby"

const PostPreview = ({date, link, title, img}) => {
  const formattedDate = new Date(date).toLocaleDateString()
  return (
    <Link to={link}>
      <div className="post-preview__container">
        <div className="post-preview__img-container">
          <img src={img} alt={title}/>
          <div className="post-preview__title">{title}</div>
          <div className="post-preview__date">{formattedDate}</div>
        </div>
      </div>
    </Link>
  )
};

export default PostPreview;
