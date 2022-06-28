import React from "react"
import "../styles/post-link.scss"

export default function PostLink({ post }) {
    const { id, title, images, postDate } = post;

    return (
        <div className="post-link">
            <div>
                <img src={images[0].file.url} className="post-link-image" alt="post-cover"></img>
            </div>
            <div className="post-link-text">
                <h2>{title}</h2>
                <p className="post-link-body text-red-600">{title}</p>
                <p className="post-link-body">{postDate}</p>
            </div>
        </div>
    )
}