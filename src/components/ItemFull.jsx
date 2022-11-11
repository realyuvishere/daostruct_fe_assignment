import * as React from 'react'
import {Box, Grid, Button, CircularProgress} from '@mui/material'
import moment from 'moment'
import MediaFocus from './MediaFocus'

const trimString = (string, threshold) => {
    // string = String(string)
    let theString = string.trim().split(' ')
    let newString = []
    if (theString.length >= threshold) {
        for (let i = 0; i < threshold; i++) {
            newString.push(theString[i]);
        }
        return (newString.join(' ') + '...')
    } else {
        return theString.join(' ')
    }
}

const ItemFull = ({trimmed, copyright, date, explanation, media_type, title, ...props}) => {
    const [open, setOpen] = React.useState(false)
    const [delayOpen, setDelayOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
        setDelayOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
        setTimeout(() => {
            setDelayOpen(false)
        }, 1000)
    }
    if (explanation) {
        return (
            <>
            <Box>
                <Grid container spacing={2} direction="row-reverse">
                    <Grid item md={4} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                        {media_type === 'image' ? 
                            <>
                            <div>
                                <img src={props.url} style={{width: '100%', height: 'auto'}} alt={title} />
                                {!trimmed && <Button variant="contained" onClick={handleClickOpen} sx={{width: '100%'}}>View full image</Button>}
                            </div>
                            </>
                        : media_type === 'video' ?
                            <>
                            {props.thumbnail_url ?
                                <>
                                <div>
                                    <img src={props.thumbnail_url} style={{width: '100%', height: 'auto'}} alt={title} />
                                    {!trimmed && <Button variant="contained" onClick={handleClickOpen} sx={{width: '100%'}}>Watch video</Button>}
                                </div>
                                </>
                            :
                                <>
                                <div>
                                    <embed src={props.url} style={{width: '100%', height: 'auto'}} />
                                    {!trimmed && <Button variant="contained" onClick={handleClickOpen} sx={{width: '100%'}}>Watch in theatre mode</Button>}
                                </div>
                                </>
                            }
                            </>
                        :
                            <></>
                        }
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <h3 style={{fontWeight: '400'}}>{moment(date).format('LL')}</h3>
                        <h1 style={{fontWeight: '600'}}>{title}</h1>
                        <Box sx={{fontWeight: '300', lineHeight: '1.5rem', fontSize: '1rem'}}>
                            {trimmed ? trimString(explanation, 50) : explanation}
                        </Box>
                        <Box sx={{padding: '1rem'}}>
                            &copy; {copyright ?? 'NASA'}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {delayOpen && <MediaFocus data={{media_type, url: props.hdurl ?? props.url, title}} handleClose={handleClose} open={open} />}
            </>
        )
    } else {
        return (
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }
}

export default ItemFull