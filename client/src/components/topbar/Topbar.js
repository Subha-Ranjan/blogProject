import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";
import { Link, Outlet } from "react-router-dom";

function Topbar() {
  // const user = false; //USER logged in or not decides the top Right
  let { user, dispatch } = useContext(Context);
  // console.log("User:", null || user.profilePic);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-twitter fa-shake"></i>
          <i className="topIcon fa-brands fa-facebook fa-spin"></i>
          <i className="topIcon fa-brands fa-youtube fa-beat-fade"></i>
          <i className="topIcon fa-brands fa-google fa-spin fa-spin-reverse"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/" className="link">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/write" className="link">
                {user && "WRITE"}
              </Link>
            </li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src={
                user.profilePic ||
                "https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-1024x1024.jpg"
              }
              alt=""
            />
          ) : (
            <>
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </li>
              </ul>
            </>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Topbar;
