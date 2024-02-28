import './App.css'
import './styles/header.css'
import './styles/card.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/experiences.css'
import React from 'react'
import logo from './assets/profile.jpg'
import Instagram from './components/svg/instagram'
import LinkedIn from './components/svg/linkedin'
import { motion } from 'framer-motion'

import Projects from './components/svg/projects'
import Contact from './components/svg/contact'
import GithubOutLine from './components/svg/github-outline'
import Skills from './components/svg/skills'
import ProjectCard from './components/projectcards'
import SkillCard from './components/skillcards'
import ExperienceCard from './components/experiencecards'
import Experience from './components/svg/experience'
import Menu from './components/svg/menu'
import Download from './components/svg/download'

const App: React.FC = () => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
     <>
     <header><Menu fillColor='#fff'></Menu></header>
        <section className='header-column'>
          <a className="logo" href='/'>&lt;/F&gt;</a>
        <motion.ul variants={variants}>
          <motion.li whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }} ><a href='#experience'><Experience fillColor="blue"/>Experience</a></motion.li>
          <br />
          <motion.li whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}><a href='#skills'><Skills fillColor="red"/>Skills</a></motion.li>
          <br />
          <motion.li whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}><a href='#projects'><Projects fillColor="red"/>Projects</a></motion.li>
          <br />
          <motion.li whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}><a href='#contact'><Contact fillColor="red"/>Contact me</a></motion.li>
        </motion.ul>

        <div className='header-bottom'>
                    <a href='mailto:obedmontano43@gmail.com' target="_blank"><Contact fillColor='lightblue'/></a>
                    <a href='https://github.com/ObedMz' target="_blank"><GithubOutLine fillColor="white"/></a>
                    <a href='https://www.linkedin.com/in/obed-francisco-zapata/' target="_blank"><LinkedIn fillColor="#0A66C2"/></a>
        </div>
      </section>
        <div className='content-section'>
        <section id='first' className='first-content'>
            <div className='image-content'>
              <img className='image-logo' src={logo}/>
            </div>
        <div className='card' id='present'>
            <div className='card-header'>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className='card-main'>
            <h1>Francisco Obed Montaño Zapata</h1>
            <p>Software Engineering Student from Peru 🦙</p>
            </div>
            <div>
              
              <div className='card-footer'>
                  <a href='/cv.pdf' target='_blank' id="downloadLink"><Download fillColor='white'/>Curriculum</a>
                  
                  <div className="right">
                  <a href='mailto:obedmontano43@gmail.com' target="_blank"><Contact fillColor="lightblue"/></a>
                  <a href='https://github.com/ObedMz/' target="_blank"><Instagram fillColor="red"/></a>
                  <a href='https://www.linkedin.com/in/obed-francisco-zapata/' target="_blank"><LinkedIn fillColor="#0A66C2"/></a>
                  </div>
              </div>
            </div>
        </div>
          </section>
      <section className='experience-section' id='experience'>
            <div className='header-content'>
                <h1>Experience</h1>
            </div>
            <motion.div className='experience-container' variants={container} initial="hidden" animate="visible">
              <ExperienceCard work='Java Developer' company='MineLC Network. Mexico (Remote)'
              description = 'Authentication systems in Java for Cloud servers, process improvement and database administration.' year='2024'/>
            <ExperienceCard work='Gestor ERT' company='Promart Home Center (2023)'
              description = 'Creation of DashBoards in Excel, Macros and Visual Basics.' year='2021'/>
            </motion.div>
        </section>
        <section id='skills'>
            <div className='header-content'>
                <h1>knowledge and skills</h1>
                <p>more than <span className='primary_highly'>2 years</span> of <span className='blank_highly'>experience</span> working with different programming languages like <span className='blank_highly'>Java, Javascript, MySQL </span>and more than <span className='primary_highly'>15 projects.</span></p>
            </div>
            <motion.div className='card-container' variants={container} initial="hidden" animate="visible">
                  <SkillCard icon={<></>} title='Java Applications' description='2 years of experience creating projects and systems based on Java SE, for Cloud servers.' url='#projects'/>
                  <SkillCard icon={<></>} title="Rest API's" description='Experience creating server-side applications using frameworks such as Nodejs and express.' url='#projects'/>
                  <SkillCard icon={<></>} title='Mobile Applications' description='Learning to implement technologies like React-Native for creating mobile, web and desktop applications.' url='#projects'/>
            </motion.div>
        </section>

        <section className='experience-section' id='languages'>
            <h1 style={{ fontSize: 30}}>Languages and Tools</h1>
            <motion.div className='language-container' variants={container} initial="hidden" animate="visible">
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/1051/1051277.png'/>
                <h4>HTML</h4>
              </div>
              <div className='item'>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png " alt=""/>
                <h4>CSS</h4>
              </div>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png '/>
                <h4>Javascript</h4>
              </div>
              <div className='item'>
                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png '/>
                <h4>Typescript</h4>
              </div>
              <div className='item'>
                <img src="   https://cdn-icons-png.flaticon.com/512/3291/3291669.png " alt="" />
                <h4>Java</h4>
              </div>
              <div className='item'>
                <img src="   https://cdn-icons-png.flaticon.com/512/10196/10196140.png " alt="" />
                <h4>MySQL</h4>
              </div>
              <div className='item'>
                 <img src="https://cdn-icons-png.flaticon.com/512/12514/12514434.png" alt="" />
                <h4>Git</h4>
              </div>
              <div className='item'>
                <img src="https://cdn-icons-png.flaticon.com/512/2232/2232241.png " alt="" />
                <h4>AWS</h4>
              </div>
            </motion.div>
        </section>

        <section id='projects'>
        <div className='header-content'>
                <h1>Working Projects</h1>
            </div>

            <motion.div className='project-container' variants={container} initial="hidden" animate="visible">

          <ProjectCard
            title='IPAuthenticator'
            description='System created for Minecraft Servers to authenticate operator users using an IPAdress.'
            image='public/ipauth.png'
            linkPage='https://www.spigotmc.org/resources/ipauthenticator.82206/' linkSource='https://github.com/ObedMz/IPauthenticator'
            tags={['java', 'linux']}/>

        <ProjectCard
            title='Lobby System'
            description='System that balances user traffic on servers, improving their scalability and performance.'
            image='public/lobbysystem.png'
            linkPage='https://www.spigotmc.org/resources/lobby-system-bungeecord.81668/'
            linkSource='https://github.com/ObedMz/LobbySystem'
            tags={['java', 'mysql']}/>

          <ProjectCard
            title='Spoticrack - REST API'
            description='Rest API that performs Web Scraping to extrapolate relevant data about artists, music, and albums from the Internet.'
            image='public/rest.webp'
            linkPage='https://github.com/ObedMz/Spoticrack' linkSource='https://github.com/ObedMz/Spoticrack'
          tags={['javascript', 'express', 'nodejs']}/>

          <ProjectCard
            title='Beatify App'
            description='Mobile application to play free music, albums, playlists and artists from the internet for devices Android.'
            image='public/react.webp'
            linkPage='https://github.com/ObedMz/Beatify' linkSource='https://github.com/ObedMz/Beatify'
          tags={['react', 'typescript']}/>

          </motion.div>
        </section>
        </div>
      </>
  )
}
export default App
