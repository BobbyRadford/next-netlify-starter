import '@styles/globals.css'
import { RowndProvider } from '@rownd/react'

function Application({ Component, pageProps }) {
  return (
    <RowndProvider appKey='key_flttazhvqb4a9qn8yukfyekm' apiUrl='https://api.us-east-2.dev.rownd.io'>
      <Component {...pageProps} />
    </RowndProvider>
  )
}

export default Application
