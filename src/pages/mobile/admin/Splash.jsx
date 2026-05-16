import {
  FaWifi,
  FaArrowRight,
  FaUserPlus,
  FaBolt,
  FaShieldAlt,
  FaMobileAlt
} from "react-icons/fa";

import {
  useNavigate
} from "react-router-dom";


function Splash() {
  const navigate = useNavigate();



  const handleGuest = () => {

    navigate("/home");

  };

  const handleCreate = () => {

    navigate("/auth");

  };

  return (

    <div style={styles.page}>

      {/* BACKGROUND CIRCLES */}

      <div style={styles.circle1}></div>
      <div style={styles.circle2}></div>

      {/* CONTENT */}

      <div style={styles.container}>

        {/* TOP */}

        <div style={styles.top}>

          {/* LOGO */}

          <div style={styles.logo}>

            <FaWifi />

          </div>

          {/* TITLE */}

          <h1 style={styles.title}>
            UpenFlow
          </h1>

          <p style={styles.subtitle}>
            Buy bundles, minutes and SMS
            instantly anytime anywhere.
          </p>

        </div>

        {/* FEATURES */}

        <div style={styles.features}>

          {/* FEATURE 1 */}

          <div style={styles.featureCard}>

            <div style={styles.featureIcon}>

              <FaBolt />

            </div>

            <div>

              <h3 style={styles.featureTitle}>
                Instant Delivery
              </h3>

              <p style={styles.featureText}>
                Receive bundles instantly
              </p>

            </div>

          </div>

          {/* FEATURE 2 */}

          <div style={styles.featureCard}>

            <div style={styles.featureIcon}>

              <FaShieldAlt />

            </div>

            <div>

              <h3 style={styles.featureTitle}>
                Secure Payments
              </h3>

              <p style={styles.featureText}>
                Safe and protected checkout
              </p>

            </div>

          </div>



          {/* BUTTONS */}

          <div style={styles.buttons}>




            <button
              style={styles.guestButton}
              onClick={handleCreate}
              >

              create Account

              <FaArrowRight />

            </button>

          </div>

          {
          /* FOOTER */
          } < p style = {
          styles.footer
          } >

          Fast • Secure • Reliable < /p>
        </div>
      </div>

    </div>

  )
}

const styles = {

  page: {
    minHeight: "100vh",
    background:
    "linear-gradient(135deg,#5B3DF5,#7C4DFF)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "20px"
  },

  circle1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(255,255,255,.08)",
    top: "-100px",
    left: "-100px"
  },

  circle2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(255,255,255,.08)",
    bottom: "-80px",
    right: "-80px"
  },

  container: {
    width: "100%",
    maxWidth: "450px",
    background: "rgba(255,255,255,.12)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,.2)",
    borderRadius: "35px",
    padding: "40px 30px",
    textAlign: "center",
    color: "white",
    position: "relative",
    zIndex: 2
  },

  top: {
    marginBottom: "35px"
  },

  logo: {
    width: "110px",
    height: "110px",
    borderRadius: "30px",
    background: "rgba(255,255,255,.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 25px",
    fontSize: "45px"
  },

  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "15px"
  },

  subtitle: {
    color: "#ede9fe",
    lineHeight: "1.8",
    fontSize: "16px"
  },

  features: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    marginBottom: "35px"
  },

  featureCard: {
    background: "rgba(255,255,255,.1)",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: "22px",
    padding: "18px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    textAlign: "left"
  },

  featureIcon: {
    width: "55px",
    height: "55px",
    borderRadius: "18px",
    background: "rgba(255,255,255,.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px"
  },

  featureTitle: {
    fontSize: "17px",
    marginBottom: "6px"
  },

  featureText: {
    color: "#ede9fe",
    fontSize: "14px"
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  },

  createButton: {
    width: "100%",
    padding: "17px",
    border: "none",
    borderRadius: "18px",
    background: "white",
    color: "#5B3DF5",
    fontWeight: "700",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer"
  },

  guestButton: {
    width: "100%",
    padding: "17px",
    border: "1px solid rgba(255,255,255,.2)",
    borderRadius: "18px",
    background: "rgba(255,255,255,.08)",
    color: "white",
    fontWeight: "600",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    backdropFilter: "blur(10px)"
  },

  footer: {
    marginTop: "30px",
    color: "#ede9fe",
    fontSize: "14px",
    letterSpacing: "1px"
  }

};

export default Splash;