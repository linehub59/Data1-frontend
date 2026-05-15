import { useState } from "react";

import {
  FaGoogle,
  FaUser,
  FaPhone,
  FaLock,
  FaCheckCircle,
  FaTimes
} from "react-icons/fa";

function Auth() {

  const [formData,setFormData] =
  useState({

    name:"",
    phone:"",
    password:""

  });

  const [success,setSuccess] =
  useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });

  };

  const handleRegister = (e) => {

    e.preventDefault();

    console.log(formData);

    setSuccess(true);

  };

  const handleGoogleLogin = () => {

    console.log("Google Login");

    setSuccess(true);

  };

  return (

    <div style={styles.page}>

      {/* LEFT SIDE */}

      <div style={styles.left}>

        <div style={styles.brandCard}>

          <div style={styles.logo}>

            B

          </div>

          <h1 style={styles.brandTitle}>
            BundleLink
          </h1>

          <p style={styles.brandText}>
            Buy bundles, minutes and SMS
            instantly with a modern and
            secure platform.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div style={styles.right}>

        <div style={styles.authCard}>

          {/* HEADER */}

          <div style={styles.header}>

            <h1 style={styles.title}>
              Create Account
            </h1>

            <p style={styles.subtitle}>
              Register to continue
            </p>

          </div>

          {/* GOOGLE BUTTON */}

          <button
            style={styles.googleButton}
            onClick={handleGoogleLogin}
          >

            <FaGoogle />

            Continue with Google

          </button>

          {/* DIVIDER */}

          <div style={styles.divider}>

            <div style={styles.line}></div>

            <span style={styles.or}>
              OR
            </span>

            <div style={styles.line}></div>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleRegister}
          >

            {/* NAME */}

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                Full Name
              </label>

              <div style={styles.inputWrapper}>

                <FaUser
                  style={styles.inputIcon}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                />

              </div>

            </div>

            {/* PHONE */}

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                Phone Number
              </label>

              <div style={styles.inputWrapper}>

                <FaPhone
                  style={styles.inputIcon}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="0712345678"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input}
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div style={styles.inputGroup}>

              <label style={styles.label}>
                Password
              </label>

              <div style={styles.inputWrapper}>

                <FaLock
                  style={styles.inputIcon}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                />

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              style={styles.registerButton}
            >

              Create Account

            </button>

          </form>

          {/* LOGIN */}

          <p style={styles.bottomText}>

            Already have an account?

            <span style={styles.loginLink}>
              Login
            </span>

          </p>

        </div>

      </div>

      {/* SUCCESS MODAL */}

      {
        success && (

          <div
            style={styles.overlay}

            onClick={()=>
              setSuccess(false)
            }
          >

            <div

              style={styles.modal}

              onClick={(e)=>
                e.stopPropagation()
              }
            >

              <button
                style={styles.closeButton}

                onClick={()=>
                  setSuccess(false)
                }
              >

                <FaTimes />

              </button>

              <div style={styles.successIcon}>

                <FaCheckCircle />

              </div>

              <h2 style={styles.successTitle}>
                Registration Successful
              </h2>

              <p style={styles.successText}>
                Your account has been
                created successfully.
              </p>

              <button
                style={styles.continueButton}

                onClick={()=>
                  setSuccess(false)
                }
              >

                Continue

              </button>

            </div>

          </div>

        )
      }

    </div>

  );
}

const styles = {

  page:{
    minHeight:"100vh",
    display:"flex",
    background:"#f8fafc",
    flexWrap:"wrap"
  },

  left:{
    flex:1,
    background:
    "linear-gradient(135deg,#5B3DF5,#7C4DFF)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"40px"
  },

  brandCard:{
    maxWidth:"450px",
    color:"white"
  },

  logo:{
    width:"90px",
    height:"90px",
    borderRadius:"24px",
    background:"rgba(255,255,255,.15)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"40px",
    fontWeight:"700",
    marginBottom:"30px"
  },

  brandTitle:{
    fontSize:"52px",
    marginBottom:"20px"
  },

  brandText:{
    fontSize:"18px",
    lineHeight:"1.8",
    color:"#ede9fe"
  },

  right:{
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"40px"
  },

  authCard:{
    width:"100%",
    maxWidth:"500px",
    background:"white",
    padding:"40px",
    borderRadius:"30px",
    boxShadow:
    "0 2px 15px rgba(0,0,0,.05)"
  },

  header:{
    marginBottom:"30px"
  },

  title:{
    fontSize:"36px",
    color:"#0f172a"
  },

  subtitle:{
    color:"#64748b",
    marginTop:"8px"
  },

  googleButton:{
    width:"100%",
    padding:"16px",
    border:"1px solid #e2e8f0",
    borderRadius:"16px",
    background:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:"12px",
    fontWeight:"600",
    cursor:"pointer",
    fontSize:"15px"
  },

  divider:{
    display:"flex",
    alignItems:"center",
    gap:"15px",
    margin:"30px 0"
  },

  line:{
    flex:1,
    height:"1px",
    background:"#e2e8f0"
  },

  or:{
    color:"#64748b",
    fontSize:"14px"
  },

  inputGroup:{
    marginBottom:"20px"
  },

  label:{
    display:"block",
    marginBottom:"10px",
    color:"#0f172a",
    fontWeight:"600"
  },

  inputWrapper:{
    position:"relative"
  },

  inputIcon:{
    position:"absolute",
    left:"18px",
    top:"50%",
    transform:"translateY(-50%)",
    color:"#64748b"
  },

  input:{
    width:"100%",
    padding:"16px 16px 16px 50px",
    border:"1px solid #e2e8f0",
    borderRadius:"16px",
    outline:"none",
    background:"#fafafa",
    fontSize:"15px"
  },

  registerButton:{
    width:"100%",
    marginTop:"10px",
    padding:"16px",
    border:"none",
    borderRadius:"16px",
    background:"#5B3DF5",
    color:"white",
    fontWeight:"600",
    fontSize:"16px",
    cursor:"pointer"
  },

  bottomText:{
    textAlign:"center",
    marginTop:"25px",
    color:"#64748b"
  },

  loginLink:{
    color:"#5B3DF5",
    marginLeft:"8px",
    fontWeight:"600",
    cursor:"pointer"
  },

  overlay:{
    position:"fixed",
    inset:0,
    background:"rgba(0,0,0,.5)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"20px",
    zIndex:1000
  },

  modal:{
    width:"420px",
    background:"white",
    borderRadius:"30px",
    padding:"40px",
    textAlign:"center",
    position:"relative"
  },

  closeButton:{
    position:"absolute",
    top:"20px",
    right:"20px",
    width:"40px",
    height:"40px",
    borderRadius:"12px",
    border:"none",
    background:"#f1f5f9",
    cursor:"pointer"
  },

  successIcon:{
    width:"100px",
    height:"100px",
    borderRadius:"50%",
    background:"#dcfce7",
    color:"#22c55e",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"45px",
    margin:"0 auto 25px"
  },

  successTitle:{
    fontSize:"30px",
    color:"#0f172a",
    marginBottom:"15px"
  },

  successText:{
    color:"#64748b",
    lineHeight:"1.7",
    marginBottom:"30px"
  },

  continueButton:{
    width:"100%",
    padding:"16px",
    border:"none",
    borderRadius:"16px",
    background:"#5B3DF5",
    color:"white",
    fontWeight:"600",
    fontSize:"16px",
    cursor:"pointer"
  }

};

export default Auth;