import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const container: any = document.getElementById('app')
const root = createRoot(container)

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { default: axe } = require('@axe-core/react')
  axe(React, root, 1000)
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
