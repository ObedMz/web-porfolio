import type { FC } from 'react'
import { motion } from 'framer-motion'

interface SkillCardProps {
  icon: JSX.Element
  title: string
  description: string
  url: string
}

const SkillCard: FC<SkillCardProps> = ({ icon, title, description, url }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div className='card' variants={itemVariants} initial="hidden" animate="visible">
      <div className='title'>
        {icon}
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <a href={url}>See Projects</a>
    </motion.div>
  )
}

export default SkillCard
