import "./post.css";
import { Link } from "react-router-dom"; //rrd

export default function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">Music</span> */}

          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          {/* FrontEnd port===> localhost:3000/post/321414153534 */}
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
