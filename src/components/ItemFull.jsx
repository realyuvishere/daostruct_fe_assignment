import * as React from 'react'
import {Box, Grid, Button} from '@mui/material'
import moment from 'moment'
import MediaFocus from './MediaFocus'

const ItemFull = ({copyright, date, explanation, media_type, title, ...props}) => {
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

    return (
        <>
        <Box>
            <Grid container spacing={2} direction="row-reverse">
                <Grid item md={4} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
                    {media_type === 'image' ? 
                        <>
                        <div>
                            <img src={props.url} style={{width: '100%', height: 'auto'}} alt={title} />
                            <Button variant="outlined" onClick={handleClickOpen} sx={{width: '100%'}}>View full image</Button>
                        </div>
                        </>
                    : media_type === 'video' ?
                        <>
                        {props.thumbnail_url ?
                            <>
                            <div>
                                <img src={props.thumbnail_url} style={{width: '100%', height: 'auto'}} alt={title} />
                                <Button variant="outlined" onClick={handleClickOpen} sx={{width: '100%'}}>Watch video</Button>
                            </div>
                            </>
                        :
                            <>
                            <embed src={props.url} style={{width: '100%', height: 'auto'}} />
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
                    <Box sx={{fontWeight: '300'}}>
                        {explanation}
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
}

export default ItemFull