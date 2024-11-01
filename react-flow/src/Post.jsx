import PostBody from "./PostBody";
import PostTitle from "./PostTitle";

function Post({title,body})
{
    return(
        <>
        <PostTitle title={"React Js"} />
        <PostBody body={"React is very powerful in realtime"} />
        </>
    )
}
export default Post;