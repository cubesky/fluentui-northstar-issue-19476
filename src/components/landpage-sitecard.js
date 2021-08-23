import * as React from 'react'
import { Card, Text, Flex, Avatar } from '@fluentui/react-northstar'
import { outlineStyle } from '../utils/styles'

const LandingSiteCard = ({site}) => {
    return <Card fluid style={{...outlineStyle}}>
        <Card.Header>
            <Text size="largest" weight="bold" align="center">{site.title}</Text>
            <Flex style={{ margin: '0.5rem' }} />
            <Text align="center" style={{ whiteSpace: "pre" }}>{site.description}</Text> 
            <Flex style={{ margin: '0.5rem' }} />   
        </Card.Header>
        <Card.Body>
            <Flex style={{ justifyContent: 'center', flexFlow: 'wrap' }} gap="gap.small">
                <Card centered ghost style={{minWidth: '300px', margin: '0.5rem' }}>
                    <Card.Body>
                        <Flex gap="gap.small" column hAlign="center">
                            <Flex>
                                <Avatar
                                    image="/icon.png"
                                    label={site.title}
                                    name={site.title}   
                                    size="largest"
                                    style={{ height: '128px', width: '128px' }}
                                />
                            </Flex>
                            <Text content={site.title} align="center" weight="bold" />
                            <Text content={site.description} size="small" align="center" style={{ whiteSpace: 'pre' }}/>
                        </Flex>
                    </Card.Body>
                </Card>
                <Card centered ghost style={{minWidth: '300px', margin: '0.5rem' }}>
                    <Card.Body>
                        <Flex gap="gap.small" column hAlign="center">
                            <Flex>
                                <Avatar
                                    image="/icon.png"
                                    label={site.author.name}
                                    name={site.author.name}   
                                    size="largest"
                                    style={{ height: '128px', width: '128px' }}
                                />
                            </Flex>
                            <Text content={site.author.name} align="center" weight="bold" />
                            <Text content={site.author.summary} align="center" size="small" style={{ whiteSpace: 'pre' }}/>
                        </Flex>
                    </Card.Body>
                </Card>
            </Flex>
            <Flex style={{ margin: '0.5rem' }} />
        </Card.Body>
    </Card>
}

export default LandingSiteCard