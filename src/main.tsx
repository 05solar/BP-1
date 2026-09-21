/**
 * [엔트리 파일] main.tsx
 * React 앱을 #root DOM에 마운트하는 진입점입니다.
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
