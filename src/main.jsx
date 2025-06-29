import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import './index.css'
import App from './App.jsx'
import "./index.css";  
import { BrowserRouter } from 'react-router-dom'
import { sendToAnalytics } from './analytics';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// Web vitals değerlerini analitik sistemine gönder

