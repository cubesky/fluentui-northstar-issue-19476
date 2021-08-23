import styled from 'styled-components'

export const FlexFlowWrap = styled.div `
    flex-flow: wrap;
`

export const Sticky = styled.div `
    @media screen and (min-width: 768px) {
        position: sticky;
        top: 4rem;
    }
`

export const StickyWithTop = styled.div`
    @media screen and (min-width: 768px) {
        position: sticky;
        top: 4rem;
    }
    margin-top: 1rem;
`

export const PostWH = styled.div `
        height: auto;
        width: 100%;
        margin-bottom: 1rem;
`

export const Padding = styled.div `
        padding-top: 1rem;
`

export const MarginTop = styled.div `
        margin-top: 1rem;
`

export const HeaderContainer = styled.div `
        position: sticky;
        top: 0px;
        fliter: blur(6px);
        backdrop-filter: blur(6px);
        padding: 12px;
        z-index: 1000;
        background: var(--more-light-bg);
        border-bottom: var(--more-light-shadow);
`

export const HeaderLeft = styled.div `
        justify-content: flex-start;
        width: fit-content;
        margin-right: auto;
`

export const HeaderRight = styled.div `
        justify-content: flex-end;
        width: fit-content;
`

export const Foot = styled.footer `
        display: block;
        padding: 3rem 1.5rem 3rem;
`

export const FlexBlockContainer = styled.div `
        display: block;
        padding: var(--container-padding);
        flex-grow: 1;
        margin: 0 auto;
        max-width: var(--container);
    `
export const FlexCols = styled.div `
        display: var(--resp-flex);
        margin: 0 -.75rem;
    `
export const FlexMain = styled.main `
        display: block;
        order: 2;
        width: var(--col-main);
        box-sizing: border-box;
        flex: none;
        padding: 0 0.75rem;
    `
export const FlexLeft = styled.aside `
        display: block;
        order: 1;
        width: var(--col-side);
        box-sizing: border-box;
        flex: none;
        padding: 0 0.75rem;
    `
export const FlexRight = styled.aside `
        display: var(--hide-desktop);
        order: 3;
        width: var(--col-side);
        box-sizing: border-box;
        flex: none;
        padding: 0 0.75rem;
    `

export const ShowDesktop = styled.div `
        display: var(--show-desktop);
`

export const noPaddingAndMargin = {
    margin: 0, padding: 0
}

export const outlineStyle = {
    border: 'rgba(255,255,255,0.2) solid 1px'
}

export const linkedStyle = {
    textDecoration: 'none',
    color: '#ffe69b'
}

export const noLinkStyle = { style: { color: 'inherit', textDecoration: 'auto' }, activeStyle:{ color: 'inherit', textDecoration: 'auto' } }

export const noLinkStyleTag = { style: { color: 'inherit', textDecoration: 'auto' } }
