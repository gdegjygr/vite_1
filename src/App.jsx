import { Routes, Route } from "react-router-dom"
import './App.css'
import WatchPosts from './pages/WatchPosts'
import CreatePosts from './pages/CreatePosts'
import Layout_Maket from './pages/Layout_Maket'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout_Maket/>}>
          <Route path='/watch_posts' element={<WatchPosts/>} />
          <Route path='/create_posts' element={<CreatePosts/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
