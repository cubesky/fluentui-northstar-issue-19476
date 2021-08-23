import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Provider, teamsDarkV2Theme } from '@fluentui/react-northstar'
import NaviBar from '../components/navbar'
import Footer from '../components/footer'

const BlogShared = ({children}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
    return (
        <Provider theme={teamsDarkV2Theme}>
          <NaviBar title={site.siteMetadata.title} key="navi" />
            {children}
          <Footer key="footer" />
        </Provider>
    )
}

export default BlogShared