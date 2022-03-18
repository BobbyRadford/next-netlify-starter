import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRownd } from '@rownd/react'
import { useEffect } from 'react';

export default function Home() {
  const { is_initializing, user } = useRownd();

  const defaultUserData = {
    first_name: 'First Name',
    last_name: 'Last Name',
  }

  useEffect(() => {
    if (is_initializing) {
      return
    }
    Object.entries(defaultUserData).forEach(([key, value]) => {
      if (user.data[key] === undefined) {
        window.rownd.user.setValue(key, value)
      }
    })
  }, [is_initializing])
  

  return (
    <>
    {!is_initializing && (
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header title={`Welcome to my app${user.data.first_name ? ', ' + user.data.first_name : ''}!`} />
          <div>
            <p>What's your name?</p>
            <input
              type="text"
              defaultValue={!is_initializing ? user.data.first_name : ''}
              onChange={(e) => {
                window.rownd.user.setValue('first_name', e.target.value);
              }}
              />
          </div>
        </main>

        <Footer />
      </div>
    )}
    </>
  )
}
