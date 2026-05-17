function PageTitle() {
  return (
    <div style={styles.topHeader}>

      <div style={styles.brandSection}>

        <div style={styles.logo}>

          B

        </div>

        <div>

          <h1 style={styles.brandName}>
            UpenflowS Solutions
          </h1>

          <p style={styles.brandSubtext}>
            Fast & Secure Bundles
          </p>

        </div>

      </div>

    </div>
  );
}

const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
  },

  brandSection: {
    display: "flex",
    alignItems: "center",
    gap: "14px"
  },

  logo: {
    width: "60px",
    height: "60px",
    borderRadius: "20px",
    background:
    "linear-gradient(135deg,#5B3DF5,#7C4DFF)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "700",
    boxShadow:
    "0 10px 25px rgba(91,61,245,.25)"
  },

  brandName: {
    fontSize: "24px",
    color: "#0f172a",
    fontWeight: "700",
    marginBottom: "4px"
  },

  brandSubtext: {
    color: "#64748b",
    fontSize: "13px"
  },

};

export default PageTitle;