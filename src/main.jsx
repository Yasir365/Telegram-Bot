import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Routes from './Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
