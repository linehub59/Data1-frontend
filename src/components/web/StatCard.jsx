function StatCard( {
  title,
  value,
  icon,
  color
}) {

  return(

    <div style={styles.card}>

      <div style={ {
        ...styles.iconBox,
        background: color
      }}>
        {icon}
      </div>

      <div>

        <p style={styles.title}>
          {title}
        </p>

        <h2>{value}</h2>

      </div>

    </div>

  )
}

const styles = {

  card: {
    background: "white",
    padding: "24px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,.05)"
  },

  iconBox: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "22px"
  },

  title: {
    color: "gray",
    marginBottom: "8px"
  }

}

export default StatCard;