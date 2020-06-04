import React from "react"
import "./header.scss"
import { Button } from "@material-ui/core"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="header__container">
      <Link to="/">Home</Link>
      <Button variant="contained" color="primary">
        Get in touch
      </Button>
    </header>
  )
}

export default Header;
