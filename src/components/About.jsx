import React from 'react'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <div className={`${styles.sectionHeadText} `} >About</div>
  )
}

export default SectionWrapper(About,"");