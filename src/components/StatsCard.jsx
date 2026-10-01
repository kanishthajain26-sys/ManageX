import { memo } from "react";

function StatsCard({
  title,
  value,
  index,
}) {
  const cardData = [
    {
      icon: "◉",
      color: "purple",
      change: "+12.5%",
      text: "from last month",
    },
    {
      icon: "↗",
      color: "blue",
      change: "+8.2%",
      text: "from last month",
    },
    {
      icon: "♙",
      color: "green",
      change: "+18.4%",
      text: "from last month",
    },
    {
      icon: "$",
      color: "orange",
      change: "+6.7%",
      text: "from last month",
    },
  ];

  const data = cardData[index];

  return (
    <div className="stat-card">

      <div className="stat-top">

        <div className={`stat-icon ${data.color}`}>
          {data.icon}
        </div>

        <button className="stat-menu">
          •••
        </button>

      </div>


      <div className="stat-content">

        <span>{title}</span>

        <h2>{value}</h2>

      </div>


      <div className="stat-bottom">

        <span className="stat-growth">
          ↑ {data.change}
        </span>

        <span>
          {data.text}
        </span>

      </div>

    </div>
  );
}

export default memo(StatsCard);