import * as React from "react"
import { graphql, Link } from 'gatsby'
import { Card, Text, Flex, Button, Avatar } from '@fluentui/react-northstar'
import { outlineStyle, noLinkStyle } from '../utils/styles'

// markup
const NotFoundPage = ({data}) => {
  return (
      <>
      <Flex style={{ padding: '2.0rem' , maxWidth: '960px', margin: '0 auto' }} className="ly-content" gap="gap.small" column>
      <Card fluid style={{...outlineStyle}}>
        <Card.Header>
            <Text size="largest" weight="bold" align="center">Not Found</Text>
            <Flex style={{ margin: '0.5rem' }} />
            <Text align="center">Not Found</Text> 
            <Flex style={{ margin: '0.5rem' }} />   
        </Card.Header>
        <Card.Body>
            <Flex style={{ justifyContent: 'center', flexFlow: 'wrap' }} gap="gap.small">
                <Card centered style={{minWidth: '300px', margin: '0.5rem' }}>
                    <Card.Body>
                        <Flex gap="gap.small" column hAlign="center">
                        <Avatar
                                  image="/icon.png"
                                  label={data.site.siteMetadata.title}
                                  name={data.site.siteMetadata.title}   
                                  size="largest"
                          />
                          <Text weight="semibold" size="large">{data.site.siteMetadata.title}</Text>
                          <Flex style={{ margin: '0.5rem '}} />
                            <Text>Not Found</Text>
                        </Flex>
                    </Card.Body>
                </Card>
            </Flex>
        </Card.Body>
        <Card.Footer fitted><Button inverted fluid style={{ textDecoration: 'none' ,height: '4.0rem' }} as={(props) => <Link to='/' {...noLinkStyle} {...props}/>}><Text weight="semibold" size="larger">Back to landing</Text></Button></Card.Footer>
      </Card>
        
        </Flex>
      </>
  )
}

export default NotFoundPage


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