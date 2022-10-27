'use client'

import { ErrorBoundary, Theme } from '../component'
import RootStyleRegistry from './root-style'
import './look.css'
import type { IApp } from '@lib/type'

const Layout = ({ children }: IApp) => (
  <html>
    <head>
      <title>Tesla UI with NextJS 13</title>
      <meta
        name="description"
        content="How to quickly build a DEMO Tesla UI using #nextjs 13"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    </head>

    <body>
      {/* Happy Coding */}
      <ErrorBoundary>
        <RootStyleRegistry>
          <Theme>{children}</Theme>
        </RootStyleRegistry>
      </ErrorBoundary>
      {/* Master Freelance or Get Hired on https://wowjob.dev */}
    </body>
  </html>
)

export default Layout
