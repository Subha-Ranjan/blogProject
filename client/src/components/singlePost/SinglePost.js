import { useLocation } from "react-router-dom";
import "./singlePost.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function SinglePost() {
  const loc = useLocation();
  const pathId = loc.pathname.split("/")[2]; //used 'pathId' instead of just 'path'
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/"; // Pubic Folder for Photos
  const { user } = useContext(Context); //for checking logged in username
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + pathId); // get() req always returns a Response Type
      console.log(res.data);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    let data = getPost();
    console.log(data);
  }, [pathId]);

  const handleDelete = async () => {
    try {
      var result = window.confirm("Are you sure that you want to Delete? "); // for confirmation before delete
      if (result) {
        await axios.delete(`/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    try {
      var result = window.confirm("Are you sure that you want to Update? "); // for confirmation before delete
      if (result) {
        await axios.put(
          `/posts/${post._id}`,
          { username: user.username, title, desc } // shorthand ==> title:title , desc:desc
        );
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={PF + post.photo} alt="" />
        {updateMode ? (
          <input
            type="text"
            value={title} //{post.title}==-> {title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {post.title}
            {
              // the user only can edit or update the post - 1. Check the "username of post" and "logged in username"- context API
              post.username === user?.username && ( // ?. optional chaing - if there's no user, not gonna bother about .username
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon far fa-trash-alt"
                    onClick={handleDelete}
                  ></i>
                </div>
              )
            }
          </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b className="singlePostAuthor">{post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          /> //{post.desc} ==> {desc} new variable
        ) : (
          <p className="singlePostDesc">{post.desc} </p>
        )}

        {updateMode && (
          <button
            className="singlePostButton"
            type="submit"
            onClick={handleUpdate}
          >
            UPDATE
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
