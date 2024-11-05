import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MoviesSearch } from './MovieSearch.jsx';
import './MovieSearch-Styles/MovieSearch-Style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesSearch />
  </StrictMode>,
)
