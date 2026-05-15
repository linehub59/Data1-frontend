import AdminSidebar from "../../components/web/Sidebar";

function AdminLayout( {
  children
}) {

  return(

    <div style={styles.container}>

      <AdminSidebar />

      <div style={styles.content}>
        {children}
      </div>

    </div>

  )
}

const styles = {

  container: {
    display: "flex",
    background: "#f8fafc"
  },

  content: {
    marginLeft: "260px",
    width: "100%",
    padding: "30px"
  }

}

export default AdminLayout;