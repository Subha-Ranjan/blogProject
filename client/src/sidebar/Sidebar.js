import "./sidebar.css";

function Sidebar() {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i class="sidebarIcon fa-brands fa-twitter fa-shake"></i>
            <i class="sidebarIcon fa-brands fa-facebook fa-spin"></i>
            <i class="sidebarIcon fa-brands fa-youtube fa-beat-fade"></i>
            <i class="sidebarIcon fa-brands fa-google fa-spin fa-spin-reverse"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
