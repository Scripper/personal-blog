import React from "react";
import { Link } from "gatsby";
import "./menu.scss";
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
  const navLinks = useStaticQuery(graphql`
      {
          allContentfulPost {
              edges {
                  node {
                      category
                  }
              }
          }
      }
  `)

  const uniqueCategoryItems = new Set();
  const setUniqueCategoryItems = () => navLinks.allContentfulPost.edges.forEach(item => (
    uniqueCategoryItems.add(item.node.category)
  ));
  setUniqueCategoryItems();
  return (
    <header className="menu__container">
      <nav>
        <ul className="menu__nav-list">
          { Array.from(uniqueCategoryItems).map(item => (
            <li key={item}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          )) }
        </ul>
      </nav>
    </header>
  )
}

export default Menu;
