function GreetingCard( {
  name = "Admin"
}) {
  return (
    <div style={styles.card}>
      <div>
        <h2 style={styles.title}>👋 Hello, {name}</h2>
        <p style={styles.subtitle}>
          Welcome back! Here’s what’s happening with your system today.
        </p>
      </div>

      <div style={styles.badge}>
        Admin Panel
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(135deg, #5B3DF5, #7C3AED)",
    padding: "20px",
    borderRadius: "16px",
    color: "#fff",
    boxShadow: "0 10px 25px rgba(91, 61, 245, 0.3)",
    marginTop: "10px",
  },

  title: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "700",
  },

  subtitle: {
    margin: "5px 0 0",
    fontSize: "13px",
    opacity: 0.9,
  },

  badge: {
    background: "rgba(255,255,255,0.2)",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "500",
    backdropFilter: "blur(10px)",
  },
};

export default GreetingCard;