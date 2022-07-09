const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const liveResult = await graphql(
    `
    {
      allContentfulLivePost {
        edges {
          node {
            id
            title
            act
            advFee
            comment {
              raw
            }
            createdAt
            doorFee
            drinkCount
            drinkPrice
            images {
              id
              file {
                url
              }
            }
            openDateTime
            postDate
            startDateTime
            updatedAt
          }
        }
      }
    }
    `
  )

  if (liveResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { liveEdges } = liveResult.data.allContentfulLivePost
  console.log(liveEdges)

  liveResult.data.allContentfulLivePost.edges.forEach(({ node }) => {
    createPage({
      path: `/post/${node.id}`,
      component: path.resolve("./src/templates/posts/livePost.js"),
      context: { post: node },
    })
  })
}
