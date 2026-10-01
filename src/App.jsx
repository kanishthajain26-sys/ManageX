import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useEffect } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import {
  AppProvider,
  useAppContext,
} from "./context/AppContext";


function ThemeHandler() {
  const { state } = useAppContext();

  useEffect(() => {
    document.body.classList.toggle(
      "dark",
      state.theme === "dark"
    );
  }, [state.theme]);

  return null;
}


function ProtectedLayout({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <div className="main-area">

        <Navbar />

        {children}

      </div>

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <AppProvider>

        <ThemeHandler />

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedLayout>
                <Dashboard />
              </ProtectedLayout>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedLayout>
                <Users />
              </ProtectedLayout>
            }
          />

          <Route
            path="/users/:id"
            element={
              <ProtectedLayout>
                <UserDetails />
              </ProtectedLayout>
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>

      </AppProvider>

    </BrowserRouter>
  );
}

export default App;




