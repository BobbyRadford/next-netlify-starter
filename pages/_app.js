import '@styles/globals.css'
import { RowndProvider } from '@rownd/react'

function Application({ Component, pageProps }) {
  return (
    <RowndProvider appKey='key_t7oxljlghf1h4zb7ey37f5cx' apiUrl='https://api.us-east-2.dev.rownd.io'>
      <Component {...pageProps} />
    </RowndProvider>
  )
}

export default Application
