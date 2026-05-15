import {
  FaWifi
} from "react-icons/fa";

function WelcomeCard() {
  return (

    <div style={styles.welcomeCard}>

      <div>

        <h1 style={styles.welcomeTitle}>
          Welcome 👋
        </h1>

        <p style={styles.welcomeText}>
          Here’s what’s happening with your system today.
        </p>

      </div>

      <div style={styles.welcomeIcon}>
        <FaWifi />
      </div>

    </div>
  );
}

const styles = {
  welcomeCard: {
    background:
    "linear-gradient(135deg,#5B3DF5,#7C4DFF)",
    borderRadius: "24px",
    padding: "25px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px"
  },

  welcomeTitle: {
    fontSize: "28px",
    marginBottom: "8px"
  },

  welcomeText: {
    color: "#ede9fe"
  },

  welcomeIcon: {
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    background: "rgba(255,255,255,.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px"
  },
};

export default WelcomeCard;