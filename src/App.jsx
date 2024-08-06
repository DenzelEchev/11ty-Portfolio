import { useState } from 'react'
import './App.css'


function App() {
  const [current, currentClicked] = useState('about')
  return (
    
    <main>

      <nav>

        <ul>
          <li>
            <button  onClick={()=>currentClicked('about')}>About</button>
          </li>

          <li>
            <button  onClick={()=>currentClicked('projects')}>Projects</button>
          </li>

          <li>
            <button  onClick={()=>currentClicked('blog')}>Blog</button>
          </li>
        </ul>

      </nav>

      <div className='switch-div'>

        <div className={current === "about" ? "display" : "hidden"}>
          <p>Bio</p>
        </div>

        <div className={current === "projects" ? "display" : "hidden"}>
          <p>projects</p>
        </div>

        <div className={current === "blog" ? "display" : "hidden"}>
          <p>blog posts</p>
        </div>

      </div>

    </main>
    
  )
}

export default App
