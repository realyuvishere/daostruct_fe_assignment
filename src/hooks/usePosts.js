import moment from 'moment'
import {
    useEffect,
    useState
} from 'react'
import axios from '../utils/axios'

export default function usePosts(pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            params: {
                start_date: moment().subtract((6*pageNumber)+1, 'days').format('YYYY-MM-DD'),
                end_date: moment().subtract(((6)*(pageNumber-1))+1, 'days').format('YYYY-MM-DD')
            },
        })
        .then((res) => {
            setPosts(prevPosts => [...prevPosts, [...res.data]])
            setLoading(false)
        })
        .catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => {}
    }, [pageNumber])

    return {
        loading,
        error,
        posts
    }
}