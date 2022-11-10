import * as React from 'react'
import {ImageList, ImageListItem, ImageListItemBar, Box, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'
import ItemFocus from './ItemFocus'

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
  return (
    <>
    <Card>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          component="img"
          image={data.url}
          alt={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.copyright ?? 'NASA'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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
                  <ImageListItem key={item.url} sx={{width: 'clamp(200px, 20vw, 300px)'}}>
                    <CardListItem {...item} />
                  </ImageListItem>
              ))}
          </ImageList>
      </Box>
    </>
  )
}

export default HScroller