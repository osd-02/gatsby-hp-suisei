import React from "react"
import "../styles/layout.scss"
import Header from "../organisms/header"
import Footer from "../organisms/footer"

const Layout = ({ children }) => {
    return (
        <div className="layout min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout