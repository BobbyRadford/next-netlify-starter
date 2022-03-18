import '@styles/globals.css'
import { RowndProvider } from '@rownd/react'

function Application({ Component, pageProps }) {
  return (
    <RowndProvider appKey='1335b068-d0ea-4c23-bbd8-8351ff4d4094'>
      <Component {...pageProps} />
    </RowndProvider>
  )
}

export default Application
