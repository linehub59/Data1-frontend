import Bottomnav from "../../components/web/Bottomnav";

function AdminLayout( {
  children
}) {

  return(

    <div style={styles.container}>

      <div style={styles.content}>
        {children}
      </div>
      <Bottomnav />
    </div>

  )
}

const styles = {

  container: {
    width: "100%",
    background: "#f8fafc"
  },

  content: {
    flex: 1,
    padding: "15px"
  }

}

export default AdminLayout;