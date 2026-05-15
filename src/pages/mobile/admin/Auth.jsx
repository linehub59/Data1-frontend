import {
  useState,
  useEffect
} from "react";
import {
  FaGoogle,
  FaCheckCircle
} from "react-icons/fa";
import {
  signInWithPopup
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";
import {
  auth,
  googleProvider,
  db
} from "../../../config/Firebase.js";
import {
  useNavigate
} from "react-router-dom";
function Auth() {
  const [success,
    setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {

    try {

      const result =
      await signInWithPopup(
        auth,
        googleProvider
      );
      const user = await result.user;
   

      // USER REFERENCE
      const userRef =
      await doc(db, "users", user.uid);

      // CHECK IF USER EXISTS
      const userSnap =
      await getDoc(userRef);

      // CREATE USER IF NOT EXISTS
      if (!userSnap.exists()) {

        await setDoc(userRef, {

          uid: user.uid,

          name: user.displayName,

          email: user.email,

          photo: user.photoURL || "",

          phone: user.phoneNumber || "",

          role: "admin",

          createdAt: serverTimestamp()

        });

      }

      setSuccess(true);
      navigate("/home")

    } catch (error) {
      console.log(error)


    }

  };

  return (
    <div style={styles.page}>

      {/* AUTH CARD */}
      <div style={styles.card}>

        <div style={styles.logo}>
          B
        </div>

        <h1 style={styles.title}>Welcome to BundleLink</h1>

        <p style={styles.subtitle}>
          Sign in to continue to your dashboard
        </p>

        <button style={styles.googleBtn} onClick={handleGoogleLogin}>
          <FaGoogle size={18} />
          Continue with Google
        </button>

        <p style={styles.note}>
          Fast • Secure • Trusted access
        </p>

      </div>

      {/* SUCCESS POPUP */}
      {success && (
        <div style={styles.overlay} onClick={() => setSuccess(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

            <div style={styles.successIcon}>
              <FaCheckCircle />
            </div>

            <h2 style={styles.successTitle}>Login Successful</h2>

            <p style={styles.successText}>
              Welcome back! Redirecting you to dashboard...
            </p>

            <button
              style={styles.continueBtn}
              onClick={() => setSuccess(false)}
              >
              Continue
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#5B3DF5,#7C4DFF)",
    padding: "20px"
  },

  card: {
    width: "100%",
    maxWidth: "380px",
    background: "white",
    borderRadius: "22px",
    padding: "30px 25px",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
  },

  logo: {
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    background: "#5B3DF5",
    color: "white",
    fontSize: "28px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px"
  },

  title: {
    fontSize: "22px",
    marginBottom: "8px",
    color: "#0f172a"
  },

  subtitle: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "25px"
  },

  googleBtn: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "1px solid #e2e8f0",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.2s",
  },

  note: {
    marginTop: "18px",
    fontSize: "12px",
    color: "#94a3b8"
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    zIndex: 1000
  },

  modal: {
    width: "100%",
    maxWidth: "340px",
    background: "white",
    borderRadius: "22px",
    padding: "30px",
    textAlign: "center"
  },

  successIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#dcfce7",
    color: "#22c55e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    margin: "0 auto 15px"
  },

  successTitle: {
    fontSize: "20px",
    marginBottom: "10px"
  },

  successText: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "20px"
  },

  continueBtn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "14px",
    background: "#5B3DF5",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  }

};

export default Auth;