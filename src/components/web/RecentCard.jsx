import {
  FaArrowDown,
  FaArrowUp
} from "react-icons/fa";

function RecentCard( {
  transactions = []
}) {

  return (

    <div style={styles.card}>

      <div style={styles.header}>

        <h2 style={styles.title}>
          Recent Transactions
        </h2>

        <button style={styles.viewAll}>
          View All
        </button>

      </div>

      {
      transactions.length === 0 ? (

        <div style={styles.emptyContainer}>

          <div style={styles.emptyIcon}>
            📭
          </div>

          <h3 style={styles.emptyTitle}>
            No Transactions Yet
          </h3>

          <p style={styles.emptyText}>
            Your latest transactions will appear here.
          </p>

        </div>

      ): (

        <div style={styles.list}>

          {
          transactions.map((item) => (

            <div
              key={item.id}
              style={styles.transactionItem}
              >

              <div style={styles.left}>

                <div
                  style={ {
                    ...styles.iconBox,

                    background:
                    item.type === "sent"
                    ? "#fee2e2": "#dcfce7",

                    color:
                    item.type === "sent"
                    ? "#ef4444": "#22c55e"
                  }}
                  >

                  {
                  item.type === "sent"
                  ? <FaArrowUp />: <FaArrowDown />
                  }

                </div>

                <div>

                  <h3 style={styles.name}>
                    {item.name}
                  </h3>

                  <p style={styles.date}>
                    {item.date}
                  </p>

                </div>

              </div>

              <div>

                <p
                  style={ {
                    ...styles.amount,

                    color:
                    item.type === "sent"
                    ? "#ef4444": "#22c55e"
                  }}
                  >

                  {
                  item.type === "sent"
                  ? "-": "+"
                  }

                  Ksh {item.amount}

                </p>

              </div>

            </div>

          ))
          }

        </div>

      )
      }

    </div>

  )

}

const styles = {

  card: {
    background: "white",
    borderRadius: "26px",
    padding: "24px",
    marginTop: "25px",
    boxShadow:
    "0 10px 30px rgba(0,0,0,.05)"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px"
  },

  title: {
    fontSize: "22px",
    color: "#0f172a"
  },

  viewAll: {
    border: "none",
    background: "#ede9fe",
    color: "#5B3DF5",
    padding: "10px 14px",
    borderRadius: "12px",
    fontWeight: "600",
    cursor: "pointer"
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },

  transactionItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "18px",
    borderBottom: "1px solid #f1f5f9"
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  iconBox: {
    width: "50px",
    height: "50px",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px"
  },

  name: {
    fontSize: "16px",
    color: "#0f172a",
    marginBottom: "5px"
  },

  date: {
    fontSize: "13px",
    color: "#64748b"
  },

  amount: {
    fontSize: "16px",
    fontWeight: "700"
  },

  emptyContainer: {
    padding: "50px 20px",
    textAlign: "center"
  },

  emptyIcon: {
    fontSize: "60px",
    marginBottom: "15px"
  },

  emptyTitle: {
    fontSize: "22px",
    color: "#0f172a",
    marginBottom: "10px"
  },

  emptyText: {
    color: "#64748b",
    lineHeight: "1.6"
  }

}

export default RecentCard;