// ProjectCard.tsx

import React from 'react'
import { motion } from 'framer-motion'

interface ExperienceCardProps {
  work: string
  company: string
  description: string
  year: string
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ work, description, company, year }) => {
  return (
    <motion.div className='father-content'>
            <div className='experience-content' data-year={year}>
            <div className='work-title'>{work}</div>
            <div className='company-title'>{company}</div>
            <p className='description'>
                {description}
            </p>
            <br />
            </div>
    </motion.div>
  )
}

export default ExperienceCard
