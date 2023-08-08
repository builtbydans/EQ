import {Grid, Card } from "@mui/material";
import Launch from "../Launch";
import styles from './launchcard.module.css';

const Launches = ({launches}) =>  {
    return (
      <Grid container spacing={5}>
        {launches.map((launch) => (
          <Grid key={launch.id} item xs={6}>
            <Card className={styles.launchCard}
              sx={{backgroundColor: 'black', color: 'white'}}>
              <Launch props={launch}/>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
}


export default Launches
