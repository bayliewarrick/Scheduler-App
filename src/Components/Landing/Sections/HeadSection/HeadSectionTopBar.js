import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    identity: {
        background: '#faf9fa'
    }
  });

function HeadSectionTopBar() {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Grid container className={classes.identity} fullWidth>
                <Grid item xs={6}>
                    <Box p={2}>
                        <Typography variant="h4">
                            LandingPages
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box p={2} textAlign="right">
                        <Typography variant="h4">
                            Action Items
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HeadSectionTopBar
