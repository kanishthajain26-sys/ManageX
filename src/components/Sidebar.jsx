import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">

        <div className="brand-logo">
          P
        </div>

        <div>
          <h2>Pulse</h2>
          <span>Analytics</span>
        </div>

      </div>


      <div className="sidebar-section">

        <span className="sidebar-label">
          MAIN MENU
        </span>


        <nav>

          <NavLink to="/dashboard">
            <span className="nav-icon">⌂</span>
            Dashboard
          </NavLink>


          <NavLink to="/users">
            <span className="nav-icon">♙</span>
            Users
          </NavLink>


          <NavLink to="/users">
            <span className="nav-icon">▣</span>
            Analytics
          </NavLink>


          <NavLink to="/users">
            <span className="nav-icon">◫</span>
            Reports
          </NavLink>

        </nav>

      </div>


      <div className="sidebar-section">

        <span className="sidebar-label">
          MANAGEMENT
        </span>

        <nav>

          <NavLink to="/users">
            <span className="nav-icon">⚙</span>
            Settings
          </NavLink>

        </nav>

      </div>


      <div className="sidebar-bottom">

        <div className="upgrade-card">

          <div className="upgrade-icon">
            ✦
          </div>

          <strong>
            Upgrade plan
          </strong>

          <p>
            Get more insights and features.
          </p>

          <button>
            Upgrade now
          </button>

        </div>


        <div className="sidebar-profile">

          <div className="profile-avatar">
            K
          </div>

          <div>
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>

          <span className="profile-more">
            •••
          </span>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;