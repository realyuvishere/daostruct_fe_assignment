import { Box, Grid } from "@mui/material"

import logo from '../media/logo.svg'


const Header = () => {
    return (
        <>
        <Grid container justifyContent={'space-between'} sx={{padding: '1.5rem'}}>
            <Grid item sm={12} md={3}>
                <img src={logo} alt="Logo" style={{width: '100%', height: 'auto'}} />
                <div style={{fontSize: '1.25rem', textAlign: 'center', fontWeight: '300', paddingTop: '.5rem'}}>Yuvraj Sharma</div>
            </Grid>
            <Grid item sm={12} md={3}>
                <div style={{fontSize: '2rem', fontWeight: '500'}}>Astronomy Picture of the Day</div>
            </Grid>
        </Grid>
        </>
    )
}

export default Header