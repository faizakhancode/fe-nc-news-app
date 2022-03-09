import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopics } from "./utils/api";

export default function Nav() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((data) => {
            setTopics(data)
        })
    }, [])
    return (
        <nav className="navbar">
            <Link to="/" className="navlink">Home</Link>
            <h3> happy reading!</h3>
            {topics.map((topic) => {
                return (
                <Link 
                className="header_topic_navlink"
                key={topic.slug}
                to={`/topics/${topic.slug}`}
                >
                    {topic.slug}
                    </Link>
                    )
            })}
            </nav>
    )
}