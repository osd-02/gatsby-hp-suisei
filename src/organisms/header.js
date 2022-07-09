import React from "react"
import { Link } from "gatsby"
import LOGO_IMG from "../../static/main-logo.gif"

export default function Header() {
  return (
    <div className="flex justify-center w-screen h-28">
      <Link to="/" className="m-10">
        <img
          src={LOGO_IMG}
          className="logo-image w-40 sm:w-64"
          alt="logo"
        ></img>
      </Link>
    </div>
  )
}
