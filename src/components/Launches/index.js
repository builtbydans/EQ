import {Grid, Card } from "@mui/material";
import Launch from "../Launch";
import styles from './launches.module.css';

const Launches = ({launches}) =>  {
    return (
        <Grid container spacing={5}>
            {launches.map((launch) => (
                <Grid key={launch.id} item xs={6}>
                    <Card className={styles.launchCard}>
                        <Launch props={launch}/>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}


export default Launches
