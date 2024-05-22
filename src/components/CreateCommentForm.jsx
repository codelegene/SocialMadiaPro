import react, { useState } from "react";

function CreateCommentForm(props) {
    const [content, setContent] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();

        if (content === "") {
            alert("Comment required!");
        } else {
            console.log(content);
            props.onNewSubmit({content});
            setContent("");
        }
    }

    let handleContentChange = (event) => {
        setContent(event.target.value);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label for="postComment">Enter comment: </label>
            <input type="text" name="postComment" onChange={handleContentChange} value={content}/>
            <button type="submit" disabled={content === ""}>Send</button>
        </form>
    )
}

export default CreateCommentForm;
