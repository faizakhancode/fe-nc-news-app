import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import * as api from "./utils/api.js";
import SingleArticle from "./SingleArticle.jsx";
import { useParams } from "react-router-dom";

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {slug} = useParams();


    useEffect(() => {
        setIsLoading(true);
        api.getArticles(slug).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
            setError(null)
        })
        .catch((err) => {
            setError(err.message);
        })
    }, [slug])

    if (error) {
        return <p>{ error }</p>
    }
    if(isLoading) return <p> Loading....</p>
    return (
        <section className="homepage_article_list">
            {articles.map(({ article_id, title, topic, author, body, votes}) => {
                return (
                    <SingleArticle 
                    key={article_id}
                    article_id={article_id}
                    title={title}
                    topic={topic}
                    author={author}
                    body={body}
                    votes={votes}/>
                )
            })}
        </section>
    )
}