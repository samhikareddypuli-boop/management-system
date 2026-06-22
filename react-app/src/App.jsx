import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar'


function App() {
  const name = "Sam"
  console.log(name)
  return (
    <div>
      <Navbar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App