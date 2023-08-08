import React from 'react'
import SpaceXVid from '../../assets/media/spacexpromo.mp4'
import styles from './videohero.module.css'

const VideoHero = () => {
  return (
    <div className={styles.videoBG}>
      <video src={SpaceXVid} autoPlay loop muted />
    </div>
  )
}

export default VideoHero
