import React from "react"
import "../styles/layout.scss"
import Header from "../organisms/header"
import Footer from "../organisms/footer"

const Layout = ({ children }) => {
    return (
        <div className="layout min-h-screen">
            <Header />
            <main className="pl-10 pr-10">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout