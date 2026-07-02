import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/components/common/header.jsx'
import Home from './assets/components/pages/home.jsx'
import Footer from './assets/components/common/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>
)
