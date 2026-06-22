import { Outlet } from 'react-router'
import './App.css'

function App() {
  
  return (
    <>
      <div id='container'>
        <Outlet />
      </div>

      <footer>

          <span>GitHub</span>
          <a href='https://github.com/JonasFortunatoRosset' target='_blank'>Jonas Fortunato Rosset</a>
          <a href='https://github.com/EmanuelReus6' target='_blank'>Emanuel Reus</a>
      </footer>
    </>
  )
}

export default App