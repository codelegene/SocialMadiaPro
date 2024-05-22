import Post from "./Post";

function Feed(props) {
    let postFeed = props.posts.map((data) => {
        return(
            <Post title={data.title} content={data.content}/>
        )
    });

    return(
        <div>
            {postFeed}
        </div>
    );
};

export default Feed;
