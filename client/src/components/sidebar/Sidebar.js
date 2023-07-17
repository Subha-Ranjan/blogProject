import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Sidebar() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          tempora modi dolore praesentium necessitatibus eos hic. Cumque
          architecto illum, eos perspiciatis officia impedit adipisci eaque
          animi, autem maiores nemo dignissimos!
        </p>

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cat.map((c) => (
              <li className="sidebarListItem">
                <Link to={`/?cat=${c.name}`} className="link">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter fa-shake"></i>
            <i className="sidebarIcon fa-brands fa-facebook fa-spin"></i>
            <i className="sidebarIcon fa-brands fa-youtube fa-beat-fade"></i>
            <i className="sidebarIcon fa-brands fa-google fa-spin fa-spin-reverse"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
