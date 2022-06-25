import React from "react"
import "../styles/live-post.scss"
import Layout from "../components/layout"

export default function Post({ pageContext }) {
  const {
    title,
    act,
    advFee,
    comment,
    createdAt,
    doorFee,
    drinkCount,
    drinkPrice,
    images,
    openDateTime,
    postDate,
    startDateTime,
    updatedAt,
  } = pageContext.post

  return (
    <Layout>
      <div className="post-header">
        <h1>{title}</h1>
        <p className="post-date">{updatedAt}</p>
      </div>
      <img src={images[0].file.url} className="post-image" alt="post-cover"></img>
      <div className="post-body" >{comment.raw}</div>
      <div className="post-body" >{act}</div>
      <div className="post-body" >{advFee}</div>
      <div className="post-body" >{createdAt}</div>
      <div className="post-body" >{doorFee}</div>
      <div className="post-body" >{drinkCount}</div>
      <div className="post-body" >{drinkPrice}</div>
      <div className="post-body" >{openDateTime}</div>
      <div className="post-body" >{postDate}</div>
      <div className="post-body" >{startDateTime}</div>
    </Layout>
  )
}
