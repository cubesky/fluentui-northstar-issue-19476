import React from 'react'
// import { renderStatic } from "@uifabric/merge-styles/lib/server"
import { renderStatic } from "@fluentui/merge-styles/lib/server"
import { renderToString } from "react-dom/server"

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  
  const { html, css } = renderStatic(() => {
    return renderToString(bodyComponent)
  }, 'server')
  
  replaceBodyHTMLString(html)

  setHeadComponents([<style className="ssr-css" dangerouslySetInnerHTML={{ __html: css }} />])
}