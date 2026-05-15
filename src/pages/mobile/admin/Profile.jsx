import {
  useState
} from "react";
import AdminLayout from "../../../layouts/mobile/Admin";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit,
  FaCamera,
  FaTimes,
  FaWallet,
  FaShieldAlt
} from "react-icons/fa";

function Profile() {

  const [open,
    setOpen] = useState(false);

  const [profile,
    setProfile] =
  useState( {

    name: "John Doe",
    phone: "0712345678",
    email: "john@gmail.com",
    location: "Nairobi, Kenya",
    balance: "350",
    role: "Administrator"

  });

  const [formData,
    setFormData] =
  useState(profile);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setProfile(formData);

    setOpen(false);

  };

  return (
    <AdminLayout>
      <div style={styles.page}>

        {/* HEADER */}

        <div style={styles.header}>

          <div>

            <h1 style={styles.title}>
              Profile
            </h1>

            <p style={styles.subtitle}>
              View and manage your profile
            </p>

          </div>

          <button
            style={styles.editButton}
            onClick={()=>setOpen(true)}
            >

            <FaEdit />

            Edit Profile

          </button>

        </div>

        {/* PROFILE CARD */}

        <div style={styles.profileCard}>

          {/* TOP */}

          <div style={styles.topSection}>

            <div style={styles.avatarWrapper}>

              <div style={styles.avatar}>

                <FaUser />

              </div>

              <button style={styles.cameraButton}>

                <FaCamera />

              </button>

            </div>

            <div>

              <h2 style={styles.name}>
                {profile.name}
              </h2>

              <p style={styles.role}>
                {profile.role}
              </p>

            </div>

          </div>

          {/* GRID */}

          <div style={styles.grid}>

            {/* PHONE */}

            <div style={styles.infoCard}>

              <div style={styles.iconBox}>

                <FaPhone />

              </div>

              <div>

                <p style={styles.label}>
                  Phone Number
                </p>

                <h3>
                  {profile.phone}
                </h3>

              </div>

            </div>

            {/* EMAIL */}

            <div style={styles.infoCard}>

              <div style={styles.iconBox}>

                <FaEnvelope />

              </div>

              <div>

                <p style={styles.label}>
                  Email Address
                </p>

                <h3>
                  {profile.email}
                </h3>

              </div>

            </div>

            {/* LOCATION */}

            <div style={styles.infoCard}>

              <div style={styles.iconBox}>

                <FaMapMarkerAlt />

              </div>

              <div>

                <p style={styles.label}>
                  Location
                </p>

                <h3>
                  {profile.location}
                </h3>

              </div>

            </div>

            {/* WALLET */}

            <div style={styles.infoCard}>

              <div style={styles.iconBox}>

                <FaWallet />

              </div>

              <div>

                <p style={styles.label}>
                  Wallet Balance
                </p>

                <h3>
                  Ksh {profile.balance}
                </h3>

              </div>

            </div>

          </div>

          {/* SECURITY */}

          <div style={styles.securityCard}>

            <div style={styles.securityLeft}>

              <div style={styles.securityIcon}>

                <FaShieldAlt />

              </div>

              <div>

                <h3>
                  Account Security
                </h3>

                <p style={styles.securityText}>
                  Your account is protected
                </p>

              </div>

            </div>

            <button style={styles.passwordButton}>

              Change Password

            </button>

          </div>

        </div>

        {/* MODAL */}

        {
        open && (

          <div
            style={styles.overlay}

            onClick={()=>
            setOpen(false)
            }
            >

            <div

              style={styles.modal}

              onClick={(e)=>
              e.stopPropagation()
              }
              >

              {/* HEADER */}

              <div style={styles.modalHeader}>

                <div>

                  <h2>
                    Edit Profile
                  </h2>

                  <p style={styles.modalText}>
                    Update your information
                  </p>

                </div>

                <button
                  style={styles.closeButton}

                  onClick={()=>
                  setOpen(false)
                  }
                  >

                  <FaTimes />

                </button>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                >

                <div style={styles.formGrid}>

                  {/* NAME */}

                  <div style={styles.group}>

                    <label>
                      Full Name
                    </label>

                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    />

                </div>

                {/* PHONE */}

                <div style={styles.group}>

                  <label>
                    Phone Number
                  </label>

                  <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={styles.input}
                  />

              </div>

              {/* EMAIL */}

              <div style={styles.group}>

                <label>
                  Email Address
                </label>

                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                />

            </div>

            {/* LOCATION */}

            <div style={styles.group}>

              <label>
                Location
              </label>

              <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={styles.input}
              />

          </div>

        </div>

        {/* ACTIONS */}

        <div style={styles.actions}>

          <button
            type="button"
            style={styles.cancelButton}

            onClick={()=>
            setOpen(false)
            }
            >

            Cancel

          </button>

          <button
            type="submit"
            style={styles.saveButton}
            >

            Save Changes

          </button>

        </div>

      </form>

    </div>

  </div>

)
}

</div>
</AdminLayout>
);
}

const styles = {

page: {
minHeight: "100vh",
background: "#f8fafc",
padding: "30px"
},

header: {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "30px",
flexWrap: "wrap",
gap: "20px"
},

title: {
fontSize: "32px",
color: "#0f172a"
},

subtitle: {
color: "#64748b",
marginTop: "5px"
},

editButton: {
background: "#5B3DF5",
color: "white",
border: "none",
padding: "14px 20px",
borderRadius: "14px",
display: "flex",
alignItems: "center",
gap: "10px",
fontWeight: "600",
cursor: "pointer"
},

profileCard: {
background: "white",
borderRadius: "30px",
padding: "30px",
boxShadow:
"0 2px 12px rgba(0,0,0,.05)"
},

topSection: {
display: "flex",
alignItems: "center",
gap: "25px",
marginBottom: "35px",
flexWrap: "wrap"
},

avatarWrapper: {
position: "relative"
},

avatar: {
width: "120px",
height: "120px",
borderRadius: "50%",
background: "#ede9fe",
display: "flex",
justifyContent: "center",
alignItems: "center",
color: "#5B3DF5",
fontSize: "40px"
},

cameraButton: {
position: "absolute",
bottom: "0",
right: "0",
width: "40px",
height: "40px",
borderRadius: "50%",
border: "none",
background: "#5B3DF5",
color: "white",
display: "flex",
justifyContent: "center",
alignItems: "center",
cursor: "pointer"
},

name: {
fontSize: "30px",
color: "#0f172a"
},

role: {
marginTop: "8px",
color: "#64748b",
fontSize: "16px"
},

grid: {
display: "grid",
gridTemplateColumns:
"repeat(auto-fit,minmax(250px,1fr))",
gap: "20px"
},

infoCard: {
background: "#f8fafc",
padding: "24px",
borderRadius: "20px",
display: "flex",
alignItems: "center",
gap: "18px"
},

iconBox: {
width: "55px",
height: "55px",
borderRadius: "18px",
background: "#ede9fe",
color: "#5B3DF5",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "20px"
},

label: {
color: "#64748b",
marginBottom: "8px"
},

securityCard: {
marginTop: "30px",
background: "#0f172a",
color: "white",
borderRadius: "24px",
padding: "24px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap",
gap: "20px"
},

securityLeft: {
display: "flex",
alignItems: "center",
gap: "18px"
},

securityIcon: {
width: "60px",
height: "60px",
borderRadius: "18px",
background: "rgba(255,255,255,.1)",
display: "flex",
justifyContent: "center",
alignItems: "center",
fontSize: "22px"
},

securityText: {
marginTop: "5px",
color: "#cbd5e1"
},

passwordButton: {
background: "#5B3DF5",
color: "white",
border: "none",
padding: "14px 18px",
borderRadius: "14px",
cursor: "pointer",
fontWeight: "600"
},

overlay: {
position: "fixed",
inset: 0,
background: "rgba(0,0,0,.5)",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "20px",
zIndex: 1000
},

modal: {
width: "700px",
background: "white",
borderRadius: "30px",
padding: "30px"
},

modalHeader: {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
marginBottom: "30px"
},

modalText: {
color: "#64748b",
marginTop: "5px"
},

closeButton: {
width: "42px",
height: "42px",
borderRadius: "12px",
border: "none",
background: "#f1f5f9",
cursor: "pointer",
fontSize: "18px"
},

formGrid: {
display: "grid",
gridTemplateColumns: "1fr 1fr",
gap: "20px"
},

group: {
display: "flex",
flexDirection: "column",
gap: "10px"
},

input: {
padding: "14px",
border: "1px solid #e2e8f0",
borderRadius: "14px",
fontSize: "15px",
outline: "none",
background: "#fafafa"
},

actions: {
display: "flex",
justifyContent: "flex-end",
gap: "15px",
marginTop: "30px"
},

cancelButton: {
background: "#f1f5f9",
border: "none",
padding: "14px 20px",
borderRadius: "14px",
cursor: "pointer",
fontWeight: "600"
},

saveButton: {
background: "#5B3DF5",
color: "white",
border: "none",
padding: "14px 22px",
borderRadius: "14px",
cursor: "pointer",
fontWeight: "600"
}

};

export default Profile;