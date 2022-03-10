import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getComments } from "./utils/api"

export default function  ArticleComments() {
const [comments, setComments] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const {article_id} = useParams()


useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((commentsFromApi) => {
        setComments(commentsFromApi)
        setIsLoading(false)
        setError(null)
    }) .catch((err) => {
        setError(err.message);
    })
}, [])

if (error) {
    return <p>{ error }</p>
}

if(isLoading) return <p> Loading....</p>
    return (
        <main>
            <h4 className='comment_title'>
                comments
            </h4>
            <ul>
                {comments.map((comment)=> {
                    return (
                        <ul className='single_Article_comments' key={comment.comment_id}>
                            <p> Posted by:{comment.author} </p>
                            <p> {comment.body} </p>
                            <p>{String(comment.created_at).substring(0,10)}</p>
                            <p> {comment.votes} </p>
                        </ul>
                    )
                })}
            </ul>
        </main>
    )
}