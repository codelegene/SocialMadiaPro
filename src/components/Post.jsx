import React, { useState } from 'react';
import Comment from './Comment';
import CreateCommentForm from './CreateCommentForm';
import CommentFeed from './CommentFeed';

function Post(props) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);

    const handleLike = () => {
       setLikes(likes + 1);
    }

    let handleNewSubmission = (data) => {
        setComments([...comments, data]);
    };

    return(
        <div class="post">
            <h2>{props.title}</h2>
            <h3>{props.content}</h3>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>
            <p>Comments:</p>
            <CommentFeed comments={comments}/>
            <CreateCommentForm onNewSubmit={handleNewSubmission}/>
        </div>
    )
}

export default Post
