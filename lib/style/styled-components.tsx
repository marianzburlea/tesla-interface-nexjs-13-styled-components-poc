import type { ReactNode } from 'react'
import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { IApp } from '..'

export const useStyledComponentsRegistry = () => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.seal()
    return <>{styles}</>
  }

  const StyledComponentsRegistry = ({ children }: IApp) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as ReactNode}
    </StyleSheetManager>
  )

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const
}
