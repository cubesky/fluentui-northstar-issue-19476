import * as React from 'react'
import { Flex } from '@fluentui/react-northstar'
import LandPageSiteCard from './landpage-sitecard'

const LandingPage = ({site, images}) => {
    return (
    <Flex style={{ padding: '2.0rem' , maxWidth: '960px', margin: '0 auto' }} className="ly-content" gap="gap.small" column>
        <LandPageSiteCard site={site} images={images}/>
    </Flex>
    )
}

export default LandingPage