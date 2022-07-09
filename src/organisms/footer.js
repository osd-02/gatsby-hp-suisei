import React from "react"
import "../styles/footer.scss"

export default function Footer() {
    return (
        <footer className="footer text-center">
            © {new Date().getFullYear()} suisei
        </footer>
    )
}