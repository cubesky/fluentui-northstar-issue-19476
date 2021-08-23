import * as React from 'react'
import { Link } from 'gatsby'
import { Card, Pill, Text } from '@fluentui/react-northstar'
import { TagIcon } from '@fluentui/react-icons-northstar'
import { FlexFlowWrap, StickyWithTop, noLinkStyle } from '../utils/styles'

const TagsSide = ({tags}) => {
    const outlineStyle = { border: 'rgba(255,255,255,0.2) solid 1px', height: 'fit-content' }
    let naviItems = []
    for (let c in tags) {
        let tag = tags[c]
        naviItems.push(<Pill key={'tag-' + tag.name} size="small" selectable icon={<TagIcon />} as={(props) => <Link to={'/tags/' + tag.name } {...noLinkStyle} {...props} ></Link>}>{tag.name}</Pill>)
    }
    return (<StickyWithTop>
        <Card fluid style={outlineStyle}>
            <Card.Header>
                <Text>标签</Text>
            </Card.Header>
            <Card.Body>
                <FlexFlowWrap>
                    {naviItems}
                </FlexFlowWrap>
            </Card.Body>
        </Card>
    </StickyWithTop>)
}

export default TagsSide