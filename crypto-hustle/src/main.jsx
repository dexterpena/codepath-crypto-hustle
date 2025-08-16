import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './routes/Layout'
import DetailView from './routes/DetailView'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout />}>
      <Route index={true} path="/" element={<App />} />
      <Route path="/coinDetails/:symbol" element={<DetailView />} />
    </Route>
  </Routes>
</BrowserRouter>


)
