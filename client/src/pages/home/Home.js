import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  // const location = useLocation(); //entire object
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search); //  data coming from Backend Port : localhost:5000/api/posts
      console.log("Search.data:", res.data); //All response data
      setPosts(res.data);
      // console.log(posts.map((m) => m.title)); //All Titles
    };
    fetchPosts();
  }, [search]); //**Imp - otherwise, searchpage > homepage won't show all

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
