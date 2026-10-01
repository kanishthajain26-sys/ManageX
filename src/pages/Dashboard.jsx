import { useMemo } from "react";

import StatsCard from "../components/StatsCard";
import { stats } from "../data/data";

function Dashboard() {
  const totalStats = useMemo(() => {
    return stats.length;
  }, []);

  const chartData = [45, 62, 48, 75, 58, 82, 70, 88, 76, 94, 83, 98];

  const recentUsers = [
    {
      name: "Olivia Martin",
      email: "olivia@example.com",
      status: "Active",
      amount: "$1,240",
    },
    {
      name: "James Wilson",
      email: "james@example.com",
      status: "Active",
      amount: "$980",
    },
    {
      name: "Sophia Brown",
      email: "sophia@example.com",
      status: "Pending",
      amount: "$760",
    },
    {
      name: "Daniel Miller",
      email: "daniel@example.com",
      status: "Active",
      amount: "$1,520",
    },
  ];

  return (
    <main className="dashboard-page">

   

      <section className="welcome-section">
        <div>
          <span className="welcome-label">
            OVERVIEW
          </span>

          <h1>Good morning, Admin 👋</h1>

          <p>
            Here’s what’s happening with your dashboard today.
          </p>
        </div>

        <button className="date-button">
          <span>◷</span>
          September 27, 2026
        </button>
      </section>



      <section className="stats-grid">
        {stats.map((item, index) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            index={index}
          />
        ))}
      </section>


  

      <section className="analytics-grid">


        <div className="dashboard-card revenue-card">

          <div className="card-header">

            <div>
              <span className="card-label">
                REVENUE OVERVIEW
              </span>

              <h2>$24,560.00</h2>

              <div className="growth">
                <span>↑ 12.8%</span>
                <small>vs last month</small>
              </div>
            </div>

            <select className="chart-select">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 30 days</option>
            </select>

          </div>


          <div className="chart">

            <div className="chart-y-axis">
              <span>$10k</span>
              <span>$8k</span>
              <span>$6k</span>
              <span>$4k</span>
              <span>$2k</span>
              <span>0</span>
            </div>

            <div className="chart-area">

              <div className="chart-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="bars">
                {chartData.map((height, index) => (
                  <div
                    className="bar-wrapper"
                    key={index}
                  >
                    <div
                      className="bar"
                      style={{
                        height: `${height}%`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="chart-x-axis">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>

            </div>
          </div>
        </div>


        

        <div className="dashboard-card activity-card">

          <div className="card-header">
            <div>
              <span className="card-label">
                RECENT ACTIVITY
              </span>

              <h3>Latest Updates</h3>
            </div>

            <button className="more-button">
              •••
            </button>
          </div>


          <div className="activity-list">

            <div className="activity-item">
              <div className="activity-icon purple">
                +
              </div>

              <div>
                <strong>New user registered</strong>
                <p>Olivia Martin joined the platform</p>
                <small>2 minutes ago</small>
              </div>
            </div>


            <div className="activity-item">
              <div className="activity-icon green">
                ✓
              </div>

              <div>
                <strong>Payment received</strong>
                <p>Payment of $1,240 received</p>
                <small>18 minutes ago</small>
              </div>
            </div>


            <div className="activity-item">
              <div className="activity-icon orange">
                !
              </div>

              <div>
                <strong>System alert</strong>
                <p>Server usage reached 78%</p>
                <small>1 hour ago</small>
              </div>
            </div>


            <div className="activity-item">
              <div className="activity-icon blue">
                ↗
              </div>

              <div>
                <strong>Report generated</strong>
                <p>Monthly performance report ready</p>
                <small>3 hours ago</small>
              </div>
            </div>

          </div>

        </div>

      </section>


     

      <section className="bottom-grid">

      

        <div className="dashboard-card users-preview">

          <div className="card-header">

            <div>
              <span className="card-label">
                USER MANAGEMENT
              </span>

              <h3>Recent Users</h3>
            </div>

            <a href="/users" className="view-link">
              View all →
            </a>

          </div>


          <div className="recent-users">

            {recentUsers.map((user) => (
              <div
                className="recent-user"
                key={user.email}
              >

                <div className="user-avatar">
                  {user.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div className="user-info">
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>

                <span
                  className={`status ${user.status.toLowerCase()}`}
                >
                  {user.status}
                </span>

                <strong className="user-amount">
                  {user.amount}
                </strong>

              </div>
            ))}

          </div>

        </div>


       

        <div className="dashboard-card quick-card">

          <div className="card-header">

            <div>
              <span className="card-label">
                QUICK ACTIONS
              </span>

              <h3>Manage Dashboard</h3>
            </div>

          </div>


          <div className="quick-actions">

            <a href="/users">
              <div className="quick-icon purple">
                +
              </div>

              <div>
                <strong>Add User</strong>
                <span>Create a new user</span>
              </div>

              <span className="arrow">→</span>
            </a>


            <a href="/users">
              <div className="quick-icon blue">
                ◉
              </div>

              <div>
                <strong>Manage Users</strong>
                <span>View all users</span>
              </div>

              <span className="arrow">→</span>
            </a>


            <a href="/users">
              <div className="quick-icon green">
                ✓
              </div>

              <div>
                <strong>View Reports</strong>
                <span>Check performance</span>
              </div>

              <span className="arrow">→</span>
            </a>

          </div>

        </div>

      </section>


      <footer className="dashboard-footer">
        <span>
          Performance Dashboard
        </span>

        <span>
          {totalStats} active statistics
        </span>
      </footer>

    </main>
  );
}

export default Dashboard;