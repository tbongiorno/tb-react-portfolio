import React, { Suspense, useState } from 'react';
import { useTheme } from "styled-components";

const Hobbies = React.lazy(() => import('./Hobbies'));
const Education = React.lazy(() => import('./Education'));
const Work = React.lazy(() => import('./Work'))
const Project = React.lazy(() => import('./Project'));
const Contact = React.lazy(() => import('./Contact'));
import './App.css';

const schools = [
  {
    "key": 1,
    "name": "Scotch Plains Fanwood High School",
    "timeline": "September 2019 -> June 2023",
    "gpa": "3.8",
    "image": "src/assets/spf.webp"
  },
  {
    "key": 2,
    "name": "Virginia Polytechnic Institute and State University",
    "timeline": "August 2023 -> Present Day",
    "gpa": "3.4",
    "image": "src/assets/vt.webp"
  }
]

const hobbies = [
  {
    "key": 1,
    "name": "Video Games",
    "description": "I love to play video games and have been doing so for many years. They are a great way for me to relax at the end of the day and connect with friends online",
    "image": "/src/assets/video-games.webp"
  },
  {
    "key": 2,
    "name": "Soccer",
    "description": "Soccer has been my favorite sport to play. I've been playing it since I was 5 years old and although I am not that good, I still find time to play in some intramural leagues when I have the time.",
    "image": "/src/assets/soccer.webp"
  },
  {
    "key": 3,
    "name": "Programming",
    "description": "It may seem weird to put this here, but I have a lot of fun programming and spend a lot of my free time creating new projects.",
    "image": "/src/assets/programming.webp"
  },
  {
    "key": 4,
    "name": "Biking",
    "description": "When I was around 10 years old, my uncle gave me one of his old mountain bikes. I would ride that bike aroound my neighborhood and have even been using it to get around campus too.",
    "image": "/src/assets/biking.webp"
  }, 
]

const works = [
  {
    'key': 1,
    'title': "Bongiorno's Italian Pizzaria - Server",
    'description': "My Extended Families Pizzaria in Chicago that I worked at for 10+ years!",
    "image": "src/assets/bongiorno.webp"
  },
  {
    'key': 2,
    'title': "Erickson Senior Living: Lantern Hill - Server",
    'description': "A senior living facility where I would serve food to residents at one of the 3 on campus restauraunts!",
    "image": "src/assets/erickson.webp"
  }
]

const projects = [
  {
    "key": 1,
    'title': 'Video Game Wishlist Maker',
    'description':'Flask website that allows users to create their own video game wishlists!',
    'link': 'https://github.com/tbongiorno/Game-Wishlist-Ranker',
    'image': 'src/assets/flask.webp',
    'complete': true,
  },
  {
    "key": 2,
    'title': 'Portfolio Website',
    'description':'A Personal Portfolio Website in React.js that displays my talents to the world!',
    'link': 'https://github.com/tbongiorno/tb-react-portfolio',
    'image': 'src/assets/react.webp',
    'complete': true,
  },
  {
    "key": 3,
    'title': 'Solitaire',
    'description':'A remake of Solitaire in Godot!',
    'link': '',
    'image': 'src/assets/checkbacksoon.webp',
    'complete': true,
  }
]

const contacts = [
  {
    "key": 1,
    "platform": "Personal Email",
    "url": "trbongiorno@gmail.com",
    "image": "src/assets/gmail.webp"
  },
  {
    "key": 2,
    "platform": "Student Email",
    "url": "thomasb23@vt.edu",
    "image": "src/assets/outlook.webp"
  },
  {
    "key": 3,
    "platform": "Phone Number",
    "url": "908-342-0667",
    "image": "src/assets/iphone.webp"
  },
  {
    "key": 4,
    "platform": "LinkedIn",
    "url": "https://www.linkedin.com/in/thomas-bongiorno-90b283298/",
    "image": "src/assets/linkedin.webp"
  },
  {
    "key": 5,
    "platform": "GitHub",
    "url": "https://github.com/tbongiorno",
    "image": "src/assets/github.webp"
  }
]


function App({ toggleTheme }) {
  const theme = useTheme();

  const [activeTab, setActiveTab] = useState('about')
  const clickResume = () => {
    const pdfUrl = "src/assets/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ThomasBongiornoResume2025"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  }

  const gotoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const aboutContent = (
    <div>
      <div className="about-content">
        <h3 className="general-title">About Me</h3>
        <p className="blurb">My name is Thomas Bongiorno and as of writing this, I am a junior majoring in Computer Science at Virginia Tech. I got into Computer Science really late into high school and was not
          confident enough to create new projects until this past summer, where I made a Video Game Wishlist using Flask. I really enjoyed making that and wanted to create a place to display any 
          of my past and future projects within. I chose to make this in React because it is a commonly used frontend framework and because I know just enough of the basics to create a basic 
          portfolio, but I hope to come back to this site as I make more projects and enhance the depth (I already have a few ideas in mind). So anyways, enjoy this portfolio, it contains all of
          my past projects, work experience, contact information, and a little bit about me. Have Fun!
        </p>
        <h3 className='general-title'>Education</h3>
        <Suspense fallback={<div>Loading Schooling ... </div>}>
          {schools.map((school) => (
            <Education
              name={school.name}
              timeline={school.timeline}
              gpa={school.gpa}
              image={school.image}
              theme={ theme }
            />
          ))}
        </Suspense>
      </div>
    </div>
  )

  const workContent = (
    <div>
      <div className="work-content">
        <h3 className="general-title">Previous Job Experiences</h3>
        <Suspense fallback={<div>Loading Work Experiences ... </div>}>
          {works.map((work) => (
            <Work 
              title={work.title}
              description={work.description}
              image={work.image}
              theme={ theme }
            />
          ))}
        </Suspense>
      </div>
    </div>
  )

  const projectsContent = (
    <div>
      <div className="projects-content">
        <h3 className="general-title">My Previous and Upcoming Projects</h3>
        <Suspense fallback={<div>Loading Prior and Upcoming Projects ... </div>}>
          {projects.map((project) => (
            <Project 
              title={project.title}
              description={project.description}
              projectLink={project.link}
              image={project.image}
              complete={project.complete}
              theme={ theme }
            />
          ))}
        </Suspense>
      </div>
    </div>
  )

  const hobbyContent = (
    <div>
      <div className="hobby-content">
        <h3 className='general-title'>Hobbies</h3>
        <Suspense fallback={<div>Loading My Personal Hobbies ... </div>}>
          {hobbies.map((hobby) => (
            <Hobbies
              name={hobby.name}
              description={hobby.description}
              image={hobby.image}
              theme={ theme }
            />
          ))}
        </Suspense>
      </div>
    </div>
  )

  const contactContent = (
    <div>
      <div className="contact-content">
        <h3 className="general-title">Ways to Contact Me and Other Useful Links</h3>
        <Suspense fallback={<div>Loading Contact Information ... </div>}>
          {contacts.map((contact) => (
            <Contact 
              platform={contact.platform}
              url={contact.url}
              image={contact.image}
              theme={ theme }
            />
          ))}
        </Suspense>
      </div>
    </div>
  )


  return (
    <>
      <button onClick={ toggleSettings } style={{position: 'fixed', marginLeft: "35%", border: "5px solid"}}>
          Click On Me
      </button>

      {showSettings &&
        <div>
          <div className="settings-tab"
            style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
              <h3>Settings</h3>
              <button onClick={ toggleTheme }>
                Click to Change the theme!
              </button>
          </div>
        </div>
      }

      <button onClick={ gotoTop } style={{
        position: 'fixed',
        width: "10%",
        height: "50px",
        border: "5px solid #F1FAEE",
        background: 'black',
        top: "50px",
        left: "50px",
        }}>
          Back To Top
      </button>
      
      <figure className="header" style={{ color: theme.cardColor, backgroundColor: theme.cardBackground }}>
          <h1 style={{ textDecoration: "underline", fontFamily: "DM-Seriff", paddingTop: "1%"}}>Thomas Bongiorno's Awesome Portfolio!</h1>
          <img 
          src={"/src/assets/my-pic-head.webp"} 
          alt="My Epic Face" 
          className="header_image"
          width="300"
          height="400"
          loading="lazy"
          />
          
          <button onClick={ clickResume } style={{marginBottom: "0"}}>
            <img
            src={"src/assets/resume.webp"}
            alt="My Epic Resume"
            className="header_image"
            width="300"
            height="400"
            loading="lazy"
          />
          </button>
          <h4 style={{textDecoration: "none", marginTop: "1%", paddingBottom: "1%"}}> An Image of me and My Downloadable Resume!</h4>
      </figure>

      <div className="tabs-container">
          <nav className="tabs-header">
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
              Employment
            </button>
            <button
              className={`tab-button ${activeTab === 'projects' ?  'active': ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              className={`tab-button ${activeTab == `hobbies` ? `active`: ``}`}
              onClick={() => setActiveTab('hobbies')}
            >
              Hobbies
            </button>
            <button
              className={`tab-button ${activeTab === 'contact' ?  'active': ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Me
            </button>
          </nav>
          <div className="tabs-content">
            <Suspense fallback={<div>Loading Section ... </div>}>
              {activeTab === 'about' && aboutContent}
              {activeTab === 'work' && workContent}
              {activeTab === 'projects' && projectsContent}
              {activeTab === 'hobbies' && hobbyContent}
              {activeTab === 'contact' && contactContent}
            </Suspense>
          </div>
      </div>
    </>
  )
}

export default App
