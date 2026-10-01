import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();

  const { state, dispatch } = useAppContext();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  function handleThemeToggle() {
    dispatch({
      type: "TOGGLE_THEME",
    });
  }

  return (
    <header className="navbar">

      <div className="navbar-left">

        <button className="mobile-menu">
          ☰
        </button>

        <div className="navbar-search">
          <span>⌕</span>

          <input
            placeholder="Search anything..."
          />

          <kbd>⌘ K</kbd>
        </div>

      </div>


      <div className="navbar-right">

       

        <button
          className="icon-button theme-toggle"
          onClick={handleThemeToggle}
          title={
            state.theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
        >
          {state.theme === "light" ? "◐" : "☀"}
        </button>



        <button className="icon-button notification">
          ♢
          <span></span>
        </button>



        <div className="navbar-profile">

          <div className="navbar-avatar">
            K
          </div>

          <div>
            <strong>Admin User</strong>
            <span>Administrator</span>
          </div>

          <button
            className="profile-arrow"
            onClick={handleLogout}
          >
            ⌄
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;