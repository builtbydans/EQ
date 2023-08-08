import React from 'react'
import styles from './hero.module.css'
import { Container } from '@mui/material'
import moment from 'moment'

const Hero = () => {
  return (
    <div className={styles.hero}>

      <h1 className={styles.heroTitle}>This is Equitas X
        <span className={styles.heroTitleSpan}> Launches</span>
      </h1>

      <Container maxWidth="lg">
        <h2 className={styles.heroSubtitle}>
          We've gone above and beyond fair hiring. Our hiring process is now
          intergalatic, reaching to the far reaches of the moon, Mars and beyond
          the Copernican. Learn more about our Launches, including crew, payloads
          and destinations below.
        </h2>
        <h2 className={styles.heroSubtitleLaunch}>
          Next Launch: {moment().format('MMMM Do YYYY')}
        </h2>
      </Container>
    </div>
  )
}

export default Hero
