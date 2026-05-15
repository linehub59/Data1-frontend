import {
  FaHome,
  FaBox,
  FaMoneyBill,
  FaUsers
} from "react-icons/fa";

import {
  Link
} from "react-router-dom";

function AdminSidebar() {

  const links = [{
    icon: <FaHome />,
    name: "Dashboard",
    path: "/"
  },
    {
      icon: <FaBox />,
      name: "Bundles",
      path: "/bundles"
    },
    {
      icon: <FaMoneyBill />,
      name: "Transactions",
      path: "/transactions"
    },
    {
      icon: <FaUsers />,
      name: "Profile",
      path: "/profile"
    }];

  return(

    <div style={styles.sidebar}>

      <h2 style={styles.logo}>
        BundleLink
      </h2>

      {
      links.map((link, index)=>(

        <Link
          key={index}
          to={link.path}
          style={styles.link}
          >

          {link.icon}
          <span>{link.name}</span>

        </Link>

      ))
      }

    </div>

  )
}

const styles = {

  sidebar: {
    width: "260px",
    background: "#081028",
    color: "white",
    minHeight: "100vh",
    padding: "20px",
    position: "fixed"
  },

  logo: {
    marginBottom: "40px"
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px",
    borderRadius: "12px",
    color: "white",
    textDecoration: "none",
    marginBottom: "10px",
    background: "rgba(255,255,255,.05)"
  }

}

export default AdminSidebar;