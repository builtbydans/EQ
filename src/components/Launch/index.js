import styles from './launch.module.css'
import moment from 'moment'
import { Button, Link } from '@mui/material'

const Launch = ({props}) => {

    return (
      <section>

        <div className={styles.launchTitleRow}>
          <h4 className={styles.launchName}>{props.name}</h4>
          <img className={styles.launchImg}
            src={props.links.patch.large}
            alt=""
          />
        </div>

        <h4>Launch Date: {moment(props.date_utc).format('MMMM Do YYYY, h:mm:ss a')}</h4>
        <p>Flight No: {props.flight_number}</p>

        <p>{props.launchpad.full_name}</p>
        <p className={styles.launchDetailsSummary}>{props.launchpad.details}</p>

        <Button className={styles.launchBtn}
          sx={{borderColor: "white", color: "white", marginRight: "1rem"}}
          href={props.links.webcast}
          target='blank'
          variant="outlined">
          Watch Flight
        </Button>
        <Button className={styles.launchBtn}
          sx={{borderColor: "white", color: "white"}}
          variant="outlined">
          Learn More
        </Button>

      </section>
    )

}

export default Launch
