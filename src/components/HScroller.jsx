import * as React from 'react'
import {ImageList, ImageListItem, ImageListItemBar, Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'
import ItemFocus from './ItemFocus'
import TouchRipple from '@mui/material/ButtonBase/TouchRipple'
import {PlayCircle as PlayCircleIcon} from '@mui/icons-material'

const CardListItem = (data) => {
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
  const rippleRef = React.useRef(null)
  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  }
  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  }
  
  return (
    <>
    <ImageListItem sx={{width: 'clamp(200px, 20vw, 300px)', cursor: 'pointer', justifyContent: 'center', alignItems: 'center'}} onClick={handleClickOpen}>
      <TouchRipple ref={rippleRef} center={false} />
      {data.thumbnail_url && <PlayCircleIcon sx={{position: 'absolute'}} />}
      {data.media_type === 'video' && !data.thumbnail_url ?
        <PlayCircleIcon sx={{width: '80%', height: 'auto'}} color="primary" />
      :
        <img
          src={`${data.thumbnail_url ?? data.url}`}
          srcSet={`${data.thumbnail_url ?? data.url}`}
          alt={data.title}
          loading="lazy"
          onMouseDown={onRippleStart} 
          onMouseUp={onRippleStop}
        />
      }
      <ImageListItemBar
        title={data.title}
        subtitle={data.copyright ?? 'NASA'}
      />
    </ImageListItem>
    {delayOpen && <ItemFocus {...data} open={open} handleClose={handleClose} />}
    </>
  )
}

const HScroller = ({data}) => {
  
  return (
    <>
      <Box sx={{padding: '1rem'}}>
          <ImageList cols={7}>
              {data.map((item) => (  
                <CardListItem {...item} key={item.url} />
              ))}
          </ImageList>
      </Box>
    </>
  )
}

export default HScroller