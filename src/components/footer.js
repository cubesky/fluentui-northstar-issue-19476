import * as React from 'react'
import { outlineStyle, Foot } from '../utils/styles'
import { Card, Text, Flex } from '@fluentui/react-northstar'

const Footer = () => {
    return (
    <Foot>
        <Card fluid style={outlineStyle}>
            <Card.Footer fitted>
                <Flex column>
                    <Text content="Fluentui Northstar" align="center" weight="semibold" />
                </Flex>
            </Card.Footer>
        </Card>
    </Foot>
    )
}

export default Footer