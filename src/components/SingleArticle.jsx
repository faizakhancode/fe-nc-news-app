import {Link} from 'react-router-dom';

export default function SingleArticle({ article_id, title, topic, author, body, votes}) {
    return (
        <article className="articles_singleArticle">
            <h3 className="singleArticle_title">{title}</h3>
            <h4 className="singleArticle_author">Author - {author}</h4>
            <h5 className="singleArticle_topic"> {topic}</h5>
            <p className="singleArticle_votes">Votes - {votes}</p>
        </article>
    )
}