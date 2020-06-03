import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/footer"



const Layout = ({ children }) => {

  return (
    <div className="app-wrapper">
      <Header/>
      {/*<Header siteTitle="personal blog" />*/}
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </div>
  )
}
export default Layout
