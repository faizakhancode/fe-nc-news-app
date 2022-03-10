import { Link } from "react-router-dom";


export default function ArticleCard({article_id, title, topic, author, body, votes}) {


    return (
        <Link to={`/article/${article_id}`}>
        <article className="articles_CardArticle">
            <h3 className="cardArticle_title">{title}</h3>
            <h4 className="cardArticle_author"> {author}</h4>
            <h5 className="cardArticle_topic"> {topic}</h5>
            <p className="cardArticle_votes">{votes}</p>
        </article>
        </Link>
    )
}