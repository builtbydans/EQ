import React from 'react'
import SpaceXVid from '../../assets/media/spacexpromo.mp4'
import styles from './videohero.module.css'

const VideoHero = () => {
  return (
    <>
      <video className={styles.video} src={SpaceXVid} autoPlay loop muted />
    </>
  )
}

export default VideoHero
