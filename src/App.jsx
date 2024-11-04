import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './Places'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ImageGallery></ImageGallery>
  )
}

export default App
