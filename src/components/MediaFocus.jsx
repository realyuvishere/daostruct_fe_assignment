import * as React from 'react'
import {Dialog, AppBar, Toolbar, IconButton, Typography, Slide, Box} from '@mui/material'
import {Close as CloseIcon} from '@mui/icons-material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

const MediaFocus = ({handleClose, open, data}) => {
    const {
        title,
        media_type,
        url
    } = data
    return (
        <>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'sticky' }} color="secondary">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">{title}</Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{padding: '1rem', height: '100vh'}}>
                {media_type === 'image' ?
                    <img src={url} style={{width: '100%', height: 'auto'}} />
                :
                    <embed src={url} style={{width: '100%', height: '100%'}} />
                }
            </Box>
        </Dialog>
        </>
    )
}

export default MediaFocus