//patch req +1 
// another ^ but second click is -1
import { patchArticleVotes } from "./utils/api";
import { useEffect, useState } from "react";

export default function Votes ({votes, article_id}) {
    const [articleVotes, setArticleVotes] = useState(0)
 
useEffect(() => {

})

    const increaseVotes = () => {
        setArticleVotes ((votes) => votes +1
        )
        patchArticleVotes(article_id, 1).catch(() => {
       setArticleVotes(0)
        })

    }



    return (
        <section>
            <button onClick={increaseVotes}> Vote Total:
            {articleVotes + votes}</button>

            
        </section>
  
    )
}