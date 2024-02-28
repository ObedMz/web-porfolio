// ProjectCard.tsx

import React from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  linkPage: string
  linkSource: string
  image: string
  tags: string[]
}


const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, linkPage, linkSource, image, tags }) => {

  return (
    <motion.div className='project-content'>
      <div className='img-content' style={{ backgroundImage: `url(${image})` }}>
        <p>
          {description}
        </p>
        <a href={linkPage} target='_blank'>See More</a>
      </div>
      <div className='project-description'>
        <h3>{title}</h3>
        <div>
     
    </div>
        <div className='tag-container'>
          {tags.map((str, index) => (
            <nav key={index} className={str}>
              {str}
            </nav>
          ))}
        </div>
        <div className='footer-buttons'>
          <a href={linkPage} target='_blank'>Visit Page</a>
          <a href={linkSource} target='_blank'>Source Code</a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
