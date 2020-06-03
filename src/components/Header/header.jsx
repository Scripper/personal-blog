import React from "react";
import { Link } from "gatsby";
import "./header.scss";
import AppBar from '@material-ui/core/AppBar';


const linkList = [
  { name: 'auto', link: '/auto' },
  { name: 'react', link: '/react' },
  { name: 'bike', link: '/bike' },
  { name: 'hobbies', link: '/hobbies' },
];


const Header = () => {
  return (
    <AppBar>
      <header className="header__container">
        <nav>
          <ul className="header__nav-list">
            { linkList.map(item => (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            )) }
          </ul>
        </nav>
      </header>
    </AppBar>
  )
}

export default Header;
