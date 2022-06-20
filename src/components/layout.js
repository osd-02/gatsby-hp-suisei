import React from "react"
import "../styles/layout.scss"
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout