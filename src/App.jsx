import { useState } from 'react'
import './App.css'
import myImg from './assets/IMG_2178.png'


function App() {
  const [current, currentClicked] = useState('about')
  return (
    <>
      <div className='img-container'>
        <img src={myImg} alt="ME" />
      </div>

      <nav>

        <ul>
          <li>
            <button  onClick={()=>currentClicked('about')}>About</button>
          </li>

          <li>
            <button  onClick={()=>currentClicked('projects')}>Projects</button>
          </li>

          <li>
            <button  onClick={()=>currentClicked('Blog')}>Blog</button>
          </li>
        </ul>

      </nav>

      <div className='switch-div'>

        <div className={current === "about" ? "display" : "hidden"}>
        <p>With a <em>strong affinity for technology</em> I dove head first into the community, traveling to participate in events with the goal of growing my community presence and developing my skillset. Having formed strong bonds through the community I became an internet personality on streaming platforms, merging different communities with my own. While using OBS I grew intrigued by web extensions, manipulating my stream overlays for a professional aesthetic. The knowledge gained allowed me to <em>give back to the community</em> and aid others to improve their streaming quality. After a while I found myself interested in open source software, and before I knew it I was diving into web development, ready to share my personality and spread joy to my surroundings.</p>
        </div>

        <div className={current === "projects" ? "display" : "hidden"}>
          <p>projects</p>
        </div>

        <div className={current === "blog" ? "display" : "hidden"}>
          <p>blog</p>
        </div>

      </div>
    </>
    
  )
}

export default App
