import { useEffect, useState } from "react"
import {Card, CardActionArea, CardContent, Typography} from '@mui/material'
import axios from '../utils/axios'
import ItemFocus from "./ItemFocus"
import ItemFull from './ItemFull'

const Spotlight = () => {
    const [data, setData] = useState({})
    const [open, setOpen] = useState(false)
    const [delayOpen, setDelayOpen] = useState(false)
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

    useEffect(() => {
        return () => axios()
        .then((res) => {
            setData({...res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
        <Card sx={{ width: '90%', margin: 'auto' }} variant={'outlined'}>
            <CardActionArea onClick={handleClickOpen}>
                <CardContent>
                    <Typography sx={{ fontSize: '.9rem' }} color="text.secondary">Spotlight</Typography>
                    <ItemFull {...data} trimmed={true} />
                </CardContent>
            </CardActionArea>
        </Card>
        {delayOpen && <ItemFocus {...data} open={open} handleClose={handleClose} />}
        </>
    )
}

export default Spotlight