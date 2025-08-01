import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
)
