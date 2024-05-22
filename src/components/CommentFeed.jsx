import react from 'react';
import Comment from "./Comment";

function CommentFeed(props) {
    let commentFeed = props.comments.map((data) => {
        return(
            <Comment content={data.content}/>
        )
    });

    return(
        <div class="comment-feed">
            {commentFeed}
        </div>
    );
}

export default CommentFeed;
