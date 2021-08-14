import Grid from '@material-ui/core/Grid'
import React from 'react'
import HeadSection from './Sections/HeadSection/HeadSection'
import MidSection from './Sections/MidSection/MidSection'

function Landing() {
    return (
        <Grid container fullWidth className="landing">
            <HeadSection />
            <MidSection />
        </Grid>
    )
}

export default Landing
