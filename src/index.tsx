import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import FullScreenMessage from './components/shared/FullScreenMessage'
import { ModalContext } from './contexts/ModalContext'
import reportWebVitals from './reportWebVitals'

import './scss/global.scss'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContext>
        <Suspense fallback={<FullScreenMessage type='loading'/>}>
          <App />
        </Suspense>
      </ModalContext>
    </QueryClientProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
