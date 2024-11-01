import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './App1.jsx'
import './index.css'
import MovieGrid from './MovieGrid.jsx'
import Blog from './Blog.jsx'
import App from './App.jsx'
import CurrentDate from './CurrentDate.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
<App />
<Blog />
<MovieGrid />
<App1></App1> 
<CurrentDate />
  </StrictMode>,
)
