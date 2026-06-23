import { Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <div className="app">
      <main id="container">
        <Outlet />
      </main>
    </div>
  )
}

export default App