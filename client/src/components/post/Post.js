import "./post.css";
import { Link } from "react-router-dom"; //rrd

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/"; //Pubic Folder for Photos
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={PF + post.photo} //?? (1:09:40 )to use this url goto index.js in backend
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">Music</span> */}
          {post.categories.map((c, i) => (
            <span className="postCat" key={i}>
              {c.name}
            </span>
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
