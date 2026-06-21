import { Outlet } from 'react-router'
import './App.css'

function App() {
  
  return (
    <>
      <div id='container'>
        <Outlet />
      </div>

      <footer>
        <div className="footer-section">
          <span>GitHub</span>
          <a href='https://github.com/JonasFortunatoRosset' 
          target='_blank' rel="noopener noreferrer">Jonas</a>
          <a href='https://github.com/EmanuelReus6' 
          target='_blank' rel="noopener noreferrer">Emanuel</a>
        </div>
      </footer>
    </>
  )
}

export default App