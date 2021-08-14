import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'

function MidSection() {
    return (
        <Grid item xs={12} className="mid-section">
            <Box textAlign="center" p={4}>
                <Typography variant="h2">
                    This is the mid section
                </Typography>
            </Box>
        </Grid>
    )
}

export default MidSection
