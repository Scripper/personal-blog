import React from "react"
import Menu from "./Menu/menu"
import Footer from "./Footer/footer"
import Header from "./Header/header"

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Menu/>
      <div>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
  )
}
export default Layout
