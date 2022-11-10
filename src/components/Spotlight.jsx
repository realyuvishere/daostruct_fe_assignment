import { useEffect, useState } from "react"
import {Card, CardContent, Typography} from '@mui/material';
import axios from '../utils/axios'
import ItemFull from './ItemFull'

const Spotlight = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        return () => {
            axios()
            .then((res) => {
                setData({...res.data})
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [])
    return (
        <>
        <Card sx={{ width: '90%', margin: 'auto' }} variant={'outlined'}>
            <CardContent>
                <Typography sx={{ fontSize: '.9rem' }} color="text.secondary">Spotlight</Typography>
                <ItemFull {...data} />
            </CardContent>
        </Card>
        </>
    )
}

export default Spotlight