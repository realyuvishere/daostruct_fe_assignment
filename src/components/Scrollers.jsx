import { useState, useRef, useCallback } from 'react'
import HScroller from "./HScroller"
import usePosts from '../hooks/usePosts'
import { Alert, CircularProgress, Box } from '@mui/material'


const Scrollers = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const {
        posts,
        loading,
        error
    } = usePosts(pageNumber)


    const observer = useRef()
    const lastPostElementRef = useCallback(node => {
        console.log(node)
        if (observer.current) observer.current.disconnect()
        if (loading) return
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading])
    return (
    <>
    {posts.map((post, index) => {
        if (posts.length === index + 1) {
            return (
                <div ref={lastPostElementRef} key={posts[index][0].date}>
                    <HScroller data={post} />
                </div>
            )
        } else {
            return (
                <div key={posts[index][0].date}>
                    <HScroller data={post} />
                </div>
            )
        }
    })}
    {loading && 
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
            <CircularProgress />
        </Box>
    }
    {error && <Alert severity="error">An error occurred</Alert>}
    </>
    )
}

export default Scrollers