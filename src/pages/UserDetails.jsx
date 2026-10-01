import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useAppContext } from "../context/AppContext";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { state } = useAppContext();

  // Check if user already exists in our app state
  const localUser = state.users.find(
    (user) => String(user.id) === String(id)
  );

  // If user exists locally, don't need API
  const apiUrl = localUser
    ? null
    : `https://jsonplaceholder.typicode.com/users/${id}`;

  const {
    data: apiUser,
    loading,
    error,
  } = useFetch(apiUrl);

  // Use local user first, otherwise API user
  const user = localUser || apiUser;

  if (loading && !localUser) {
    return (
      <main className="user-details-page">
        <div className="details-loading">
          <div className="loading-spinner"></div>

          <p>Loading user details...</p>
        </div>
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="user-details-page">
        <div className="details-error">

          <h2>Something went wrong</h2>

          <p>
            {error || "User details not found."}
          </p>

          <button
            onClick={() => navigate("/users")}
          >
            Back to Users
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="user-details-page">

      {/* BACK BUTTON */}

      <button
        className="details-back"
        onClick={() => navigate("/users")}
      >
        ← Back to Users
      </button>


      {/* HEADER */}

      <div className="details-header">

        <div className="details-avatar">
          {user.name?.charAt(0).toUpperCase()}
        </div>

        <div className="details-title">

          <span className="details-overline">
            USER PROFILE
          </span>

          <h1>
            {user.name}
          </h1>

          <p>
            @{user.username || "new-user"}
          </p>

        </div>

      </div>


      {/* DETAILS GRID */}

      <div className="details-grid">


        {/* CONTACT */}

        <section className="details-card">

          <div className="details-card-header">

            <div className="details-icon">
              ✉
            </div>

            <div>
              <h2>
                Contact Information
              </h2>

              <p>
                Basic contact details
              </p>
            </div>

          </div>


          <div className="details-items">

            <div className="details-item">
              <span>Email</span>

              <strong>
                {user.email || "Not available"}
              </strong>
            </div>


            <div className="details-item">
              <span>Phone</span>

              <strong>
                {user.phone || "Not available"}
              </strong>
            </div>


            <div className="details-item">
              <span>Website</span>

              <strong>
                {user.website || "Not available"}
              </strong>
            </div>

          </div>

        </section>


        {/* ADDRESS */}

        <section className="details-card">

          <div className="details-card-header">

            <div className="details-icon">
              ⌖
            </div>

            <div>
              <h2>
                Address
              </h2>

              <p>
                Location information
              </p>
            </div>

          </div>


          <div className="details-items">

            <div className="details-item">
              <span>Street</span>

              <strong>
                {user.address?.street || "Not available"}
              </strong>
            </div>


            <div className="details-item">
              <span>City</span>

              <strong>
                {user.address?.city || "Not available"}
              </strong>
            </div>


            <div className="details-item">
              <span>Zipcode</span>

              <strong>
                {user.address?.zipcode || "Not available"}
              </strong>
            </div>

          </div>

        </section>


        {/* COMPANY */}

        <section className="details-card">

          <div className="details-card-header">

            <div className="details-icon">
              ◈
            </div>

            <div>
              <h2>
                Company
              </h2>

              <p>
                Professional information
              </p>
            </div>

          </div>


          <div className="company-content">

            <h3>
              {user.company?.name || "No company information"}
            </h3>

            <p>
              {user.company?.catchPhrase
                ? `"${user.company.catchPhrase}"`
                : "Company details are not available for this user."
              }
            </p>

            {user.company?.bs && (
              <span>
                {user.company.bs}
              </span>
            )}

          </div>

        </section>


        {/* STATUS */}

        <section className="details-card">

          <div className="details-card-header">

            <div className="details-icon">
              ✓
            </div>

            <div>
              <h2>
                Profile Status
              </h2>

              <p>
                Account information
              </p>
            </div>

          </div>


          <div className="profile-status">

            <div className="status-dot"></div>

            <div>

              <strong>
                Active User
              </strong>

              <span>
                Profile is currently active
              </span>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}

export default UserDetails;