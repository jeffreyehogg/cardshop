import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import Layout from '../components/Layout'
import Loader from '../components/Loader'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  return (
    <UserProvider>
      <Provider store={store}>
        <PersistGate
          loading={
            <Layout>
              <Loader />
            </Layout>
          }
          persistor={persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </UserProvider>
  )
}

export default MyApp
