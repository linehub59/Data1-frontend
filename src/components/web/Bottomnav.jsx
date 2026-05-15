import {
  useNavigate,
  useLocation
} from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaExchangeAlt,
  FaUser
} from "react-icons/fa";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [{
    label: "Dashboard",
    path: "/home",
    icon: FaHome
  },
    {
      label: "Bundles",
      path: "/bundles",
      icon: FaBoxOpen
    },
    {
      label: "Transactions",
      path: "/transactions",
      icon: FaExchangeAlt
    },
    {
      label: "Profile",
      path: "/profile",
      icon: FaUser
    },
    {
      label: "User",
      path: "/user",
      icon: FaUser
    },
  ];

  return (
    <div style={styles.container}>
      {tabs.map((tab) => {
        const active = location.pathname === tab.path;
        const Icon = tab.icon;

        return (
          <div
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={ {
              ...styles.tab,
              ...(active ? styles.activeTab: {}),
            }}
            >
            <div style={ { ...styles.iconWrap, ...(active ? styles.activeIcon: {}) }}>
              <Icon size={20} />
            </div>

            <span style={ { ...styles.label, ...(active ? styles.activeLabel: {}) }}>
              {tab.label}
            </span>

            {active && <div style={styles.dot} />
            }
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: 10,
    left: 10,
    right: 10,
    height: "70px",
    background: "#ffffff",
    borderRadius: "18px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    zIndex: 1000,
  },

  tab: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    color: "#64748b",
    padding: "6px 10px",
    borderRadius: "12px",
    transition: "0.2s",
    position: "relative",
  },

  activeTab: {
    color: "#2563eb",
    transform: "translateY(-3px)",
  },

  iconWrap: {
    padding: "6px",
    borderRadius: "12px",
    transition: "0.2s",
  },

  activeIcon: {
    background: "#eff6ff",
  },

  label: {
    fontSize: "11px",
    marginTop: "3px",
  },

  activeLabel: {
    fontWeight: "600",
  },

  dot: {
    width: "5px",
    height: "5px",
    background: "#2563eb",
    borderRadius: "50%",
    position: "absolute",
    bottom: "-6px",
  },
};

export default BottomNav;