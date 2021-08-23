import * as React from 'react'
import { graphql } from 'gatsby'
import LandPage from '../components/landpage'


const BlogIndex = ({data}) => {
    return (
      <>
      <LandPage site={data.site.siteMetadata}/>
      </>
    )
}

export default BlogIndex

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
        description
        siteUrl
        author {
          name
          summary
        }
    }
  }
}
`