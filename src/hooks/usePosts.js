import moment from 'moment'
import {
    useEffect,
    useState
} from 'react'
import axios from '../utils/axios'

import ax from 'axios'

export default function usePosts(pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setLoading(true)
        setError(false)
        const start_date = moment().subtract((6*pageNumber)+1, 'days').format('YYYY-MM-DD')
        const end_date = moment().subtract((6*(pageNumber-1))+1, 'days').format('YYYY-MM-DD')
        let cancel
        axios({
            params: {
                start_date,
                end_date,
            },
            cancelToken: new ax.CancelToken(c => cancel = c)
        })
        .then((res) => {
            setPosts(prevPosts => [...prevPosts, [...res.data].reverse()])
            setLoading(false)
        })
        .catch(e => {
            if (ax.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [pageNumber])

    return {
        loading,
        error,
        posts
    }
}