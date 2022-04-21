import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Article() {
    const params = useParams();
    const url = "http://localhost:3000/articles/" + params.id;
    const {data: article, isPending, error } = useFetch(url);
    const history = useHistory()
    useEffect(() => {
        if(error) {
            history.push('/');
        }
    }, [error, history])
  return (
    <div>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {article && (
            <div>
                <h2>{article.title}</h2>
                <p>By {article.author}</p>
                <p>{article.body}</p>
            </div>
        )}
    </div>
  )
}
