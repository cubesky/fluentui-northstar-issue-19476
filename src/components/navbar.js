import * as React from 'react'
import { Button, Text, Flex } from '@fluentui/react-northstar'
import { HeaderContainer, HeaderLeft } from '../utils/styles'

const NaviBar = ({title}) => {
    
    return (
    <HeaderContainer>
        <nav>
            <Flex style={{ flexGrow: 1 }}>
            <HeaderLeft>
                <Button text content={<Text weight="semilight" size="large" content={title}/>}/>
            </HeaderLeft>
            </Flex>
        </nav>
    </HeaderContainer>
    )
}

export default NaviBar
