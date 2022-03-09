import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleArticle } from "./utils/api";


export default function SingleArticle() {
const [article, setArticle] =useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const {article_id} = useParams();

useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then((articlesFromApi) => {
        setArticle(articlesFromApi)
        setIsLoading(false)
        setError(null)
    }) .catch((err) => {
        setError(err.message);
    })
},[article_id]);


if (error) {
    return <p>{ error }</p>
}
if(isLoading) return <p> Loading....</p>
    return  (
     <article>
        <article className="articles_single_Article">
            <h3 className="single_Article_title">{article.title}</h3>
            <p className="single_Article_body">{article.body}</p>
            <p className="single_Article_author"> {article.author}</p>
            <p className="single_Article_date"> {String(article.created_at).substring(0,10)}</p>
            <p className="single_Article_topic"> {article.topic}</p>
            <p className="single_Article_votes">{article.votes}</p>
        </article>
    </article>)
}
