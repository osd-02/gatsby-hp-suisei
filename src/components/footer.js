import React from "react"
import "../styles/footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} Dev Blog
        </footer>
    )
}