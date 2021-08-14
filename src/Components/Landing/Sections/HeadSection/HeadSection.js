import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';


const backgroundImageUrl = `https://images.freeimages.com/images/large-previews/d7e/graf-elements-2-1199396.jpg`;


const useStyles = makeStyles({
    headerBackground: {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ),url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    overlay: {
        flex: 1,
        position: 'relative',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: '100%',
    },
  });

function HeadSection() {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Grid container fullWidth className={classes.headerBackground}>
                <Grid item xs={12} lg={6} id="landing-header-text">
                    <Box alignItems="center" justifyContent="center" justifyItems="center" textAlign="right"  py={4} px={8}>
                        <Typography variant="h2" style={{color: '#faf9fa'}}>
                            Unleash Your <br /> Inner Self
                            </Typography>
                            <Typography variant="h4" style={{color: '#faf9fa'}}>
                                find body modification <br /> experts in your area
                            </Typography>
                            <Box py={1}>
                            <Button variant="contained" href="/schedule" color="primary">
                                Schedule a Consultation
                            </Button>
                            </Box>
                            <Box py={1}>
                            </Box>
                    </Box>    
                </Grid>
                <Grid item xs={12} lg={6} id="landing-header-text">
                    <Box py={4} px={8}>
                        <img src="./images/inside-shop-1.jpg" alt="Tattoo shop"  style={{maxWidth: '100%'}}/>
                    </Box>
                </Grid>
            </Grid>               
        </Grid>
    )
}

export default HeadSection
