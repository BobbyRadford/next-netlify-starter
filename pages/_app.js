import '@styles/globals.css'
import { RowndProvider } from '@rownd/react'

function Application({ Component, pageProps }) {
  return (
    <RowndProvider appKey='key_omgrqe4ttf2mqdpd1agkya6w' apiUrl='https://api.us-east-2.dev.rownd.io'>
      <Component {...pageProps} />
    </RowndProvider>
  )
}

export default Application
