import {
  useCallback,
  useMemo,
  useState,
} from "react";

import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";

import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

import { useAppContext } from "../context/AppContext";
import { filterUsers } from "../utils/filterData";

function Users() {
  const { state, dispatch } = useAppContext();

  const {
    users,
    loading,
    error,
    search,
    role,
    currentPage,
  } = state;

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");

  useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const debouncedSearch = useDebounce(search, 400);

  const usersWithRoles = useMemo(() => {
    return users.map((user, index) => ({
      ...user,
      role:
        index % 3 === 0
          ? "Admin"
          : index % 3 === 1
          ? "User"
          : "Manager",
    }));
  }, [users]);

  const filteredUsers = useMemo(() => {
    return filterUsers(
      usersWithRoles,
      debouncedSearch,
      role
    );
  }, [usersWithRoles, debouncedSearch, role]);

  const usersPerPage = 5;

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / usersPerPage)
  );

  const paginatedUsers = useMemo(() => {
    const startIndex =
      (currentPage - 1) * usersPerPage;

    return filteredUsers.slice(
      startIndex,
      startIndex + usersPerPage
    );
  }, [filteredUsers, currentPage]);

  const handleSearch = useCallback(
    (value) => {
      dispatch({
        type: "SET_SEARCH",
        payload: value,
      });
    },
    [dispatch]
  );

  const handleRoleChange = useCallback(
    (value) => {
      dispatch({
        type: "SET_ROLE",
        payload: value,
      });
    },
    [dispatch]
  );

  const handlePageChange = useCallback(
    (page) => {
      dispatch({
        type: "SET_PAGE",
        payload: page,
      });
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (id) => {
      dispatch({
        type: "DELETE_USER",
        payload: id,
      });
    },
    [dispatch]
  );

  function handleAddUser(event) {
    event.preventDefault();

    if (!newUserName.trim() || !newUserEmail.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: newUserName,
      email: newUserEmail,
      role: "User",
    };

    dispatch({
      type: "ADD_USER",
      payload: newUser,
    });

    setNewUserName("");
    setNewUserEmail("");
  }

  if (loading) {
    return (
      <main className="users-page">

        <div className="users-loading">
          <div className="loading-circle"></div>

          <h2>Loading users...</h2>

          <p>
            Please wait while we fetch your users.
          </p>
        </div>

      </main>
    );
  }

 
  if (error) {
    return (
      <main className="users-page">

        <div className="users-error">

          <div className="error-icon">
            !
          </div>

          <h2>Something went wrong</h2>

          <p>{error}</p>

        </div>

      </main>
    );
  }

  return (
    <main className="users-page">

      
      <section className="users-heading">

        <div>

          <span className="users-overline">
            USER MANAGEMENT
          </span>

          <h1>Users</h1>

          <p>
            Manage, search and organize all dashboard users.
          </p>

        </div>


        <div className="users-summary">

          <div className="summary-icon">
            ♙
          </div>

          <div>
            <strong>{filteredUsers.length}</strong>

            <span>
              Total users
            </span>
          </div>

        </div>

      </section>


    

      <section className="users-card add-user-card">

        <div className="section-title">

          <div className="section-title-icon">
            +
          </div>

          <div>
            <h2>Add New User</h2>

            <p>
              Create a new user for your dashboard.
            </p>
          </div>

        </div>


        <form
          className="add-user-form"
          onSubmit={handleAddUser}
        >

          <div className="input-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter user name"
              value={newUserName}
              onChange={(event) =>
                setNewUserName(event.target.value)
              }
            />

          </div>


          <div className="input-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              value={newUserEmail}
              onChange={(event) =>
                setNewUserEmail(event.target.value)
              }
            />

          </div>


          <button
            type="submit"
            className="add-user-button"
          >
            <span>+</span>
            Add User
          </button>

        </form>

      </section>


      

      <section className="users-card filters-card">

        <div className="filters-heading">

          <div>

            <span className="users-overline">
              USER DIRECTORY
            </span>

            <h2>All Users</h2>

          </div>

          <span className="result-count">
            {filteredUsers.length} results
          </span>

        </div>


        <div className="filter-section">

          <div className="search-wrapper">

            <span className="search-small-icon">
              ⌕
            </span>

            <SearchBar
              value={search}
              onChange={handleSearch}
            />

          </div>


          <div className="filter-wrapper">

            <Filter
              value={role}
              onChange={handleRoleChange}
            />

          </div>

        </div>

      </section>


      

      {paginatedUsers.length > 0 ? (
        <section className="users-card table-card">

          <div className="table-top">

            <div>

              <span className="users-overline">
                OVERVIEW
              </span>

              <h2>User List</h2>

            </div>

            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>

          </div>


          <div className="table-container">

            <UserTable
              users={paginatedUsers}
              onDelete={handleDelete}
            />

          </div>


          <div className="pagination-container">

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

          </div>

        </section>
      ) : (
        <section className="users-card empty-state">

          <div className="empty-icon">
            ⌕
          </div>

          <h2>No users found</h2>

          <p>
            Try another search term or change the role filter.
          </p>

        </section>
      )}

    </main>
  );
}

export default Users;