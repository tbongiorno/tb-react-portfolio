import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const works = [
  {
    'key': 1,
    'title': "Bongiorno's Italian Pizzaria - Server",
    'description': "My Extended Families Pizzaria in Chicago that I worked at for 10+ years!",
    "impact": "",
    "image": "src/assets/bongiorno.png"
  },
  {
    'key': 2,
    'title': "Erickson Senior Living: Lantern Hill - Server",
    'what': "A senior living facility where I would serve food to residents at one of the 3 on campus restauraunts!",
    "impact": "",
    "image": "src/assets/erickson.jpg"
  }
]

const projects = [
  {
    "key": 1,
    'title': 'Video Game Wishlist Maker',
    'description':'Flask website that allows users to create their own video game wishlists!',
    "why": "",
    'link': 'https://github.com/tbongiorno/Game-Wishlist-Ranker',
    'image': 'src/assets/flask-name.svg',
    'complete': true,
  },
  {
    "key": 2,
    'title': 'Portfolio Website',
    'description':'A Personal Portfolio Website in React.js that displays my talents to the world!',
    "why": "",
    'link': 'https://github.com/tbongiorno/template-portfolio-react',
    'image': 'src/assets/react.png',
    'complete': true,
  },
  {
    "key": 3,
    'title': 'Solitaire',
    'description':'A remake of Solitaire in Godot!',
    "why": "",
    'link': 'https://github.com/tbongiorno/tb-react-portfolio',
    'image': 'src/assets/checkbacksoon.jpg',
    'complete': true,
  }
]


const workContent = (
  <div>
    <div className="work-content">
      {works.map((work) => (
        <Work 
          
        />
      ))}
    </div>
  </div>
)

const projectsContent = (
  <div>
    <div className="projects-content">
      {projects.map((project) => (
        <Project 
          
        />
      ))}
    </div>
  </div>
)

const contactContent = (
  <div>
    <div className="contact-content">
      {contacts.map((contact) => (
        <Contact 
          
        />
      ))}
    </div>
  </div>
)




function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <>
      <div className="header">
          <h1>Thomas Bongiorno's Awesome Portfolio!</h1>
          <img 
          src={"/src/assets/my-pic-head.jpg"} 
          alt="My Epic Face" 
          className="header_image"
          width="300"
          height="400"
          />
      </div>

      <h1>Select From Below!</h1>
      <div className="select-container">
          <div className="tabs-container">
            <button
              className={`tab-button ${activeTab === 'about' ?  'active': ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={`tab-button ${activeTab === 'work' ?  'active': ''}`}
              onClick={() => setActiveTab('work')}
            >
              Work Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'projects' ?  'active': ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Project Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'contact' ?  'active': ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Me
            </button>
          </div>
          <div className="tabs-displayer">
            {activeTab === 'about' && aboutContent}
            {activeTab === 'work' && workContent}
            {activeTab === 'projects' && projectsContent}
            {activeTab === 'contact' && contactContent}
          </div>
      </div>
    </>
  )
}

export default App
