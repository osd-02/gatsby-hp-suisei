import React from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/main-logo.gif"
import "../styles/header.scss"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={LOGO_IMG} className="logo-image" alt="logo"></img>
            </Link>
        </header>
    )
}