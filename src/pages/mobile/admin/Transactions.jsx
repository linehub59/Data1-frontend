import {
  useState
} from "react";
import AdminLayout from "../../../layouts/mobile/Admin";


import {
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaMoneyBillWave,
  FaWifi,
  FaPhone,
  FaSms,
  FaTimes
} from "react-icons/fa";

function Transactions() {

  const [selectedTransaction,
    setSelectedTransaction] =
  useState(null);

  const transactions = [{
    id: "TRX-1001",
    type: "Bundle",
    item: "1GB Daily",
    amount: "50",
    status: "Success",
    network: "Safaricom",
    phone: "0712345678",
    date: "13 May 2026",
    time: "10:30 AM",
    method: "M-Pesa",
    receipt: "QWE123ABC"
  },

    {
      id: "TRX-1002",
      type: "Minutes",
      item: "100 Minutes",
      amount: "100",
      status: "Pending",
      network: "Airtel",
      phone: "0798765432",
      date: "13 May 2026",
      time: "11:15 AM",
      method: "Wallet",
      receipt: "WALLET-222"
    },

    {
      id: "TRX-1003",
      type: "SMS",
      item: "500 SMS",
      amount: "30",
      status: "Failed",
      network: "Safaricom",
      phone: "0700111222",
      date: "13 May 2026",
      time: "12:45 PM",
      method: "M-Pesa",
      receipt: "FAIL-123"
    }];

  const getStatusIcon = (status) => {

    if (status === "Success") {
      return <FaCheckCircle />;
    }

    if (status === "Pending") {
      return <FaClock />;
    }

    return <FaTimesCircle />;

  };

  const getStatusColor = (status) => {

    if (status === "Success") {
      return "#22c55e";
    }

    if (status === "Pending") {
      return "#f59e0b";
    }

    return "#ef4444";

  };

  const getTypeIcon = (type) => {

    if (type === "Bundle") {
      return <FaWifi />;
    }

    if (type === "Minutes") {
      return <FaPhone />;
    }

    return <FaSms />;

  };

  return (
    <AdminLayout>
      <div style={styles.page}>

        {/* HEADER */}

        <div style={styles.header}>

          <div>

            <h1 style={styles.title}>
              Transactions
            </h1>

            <p style={styles.subtitle}>
              View all customer transactions
            </p>

          </div>

        </div>


        {/* TABLE */}

        <div style={styles.tableContainer}>

          <table style={styles.table}>

            <thead>

              <tr>

                <th style={styles.th}>
                  Transaction
                </th>

                <th style={styles.th}>
                  Type
                </th>

                <th style={styles.th}>
                  Amount
                </th>

                <th style={styles.th}>
                  Status
                </th>

                <th style={styles.th}>
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {
              transactions.map((trx)=>(

                <tr
                  key={trx.id}

                  style={styles.row}

                  onClick={()=>
                  setSelectedTransaction(trx)
                  }
                  >

                  <td style={styles.td}>

                    <div>

                      <h4>
                        {trx.id}
                      </h4>

                      <p style={styles.grayText}>
                        {trx.phone}
                      </p>

                    </div>

                  </td>

                  <td style={styles.td}>

                    <div style={styles.typeBox}>

                      <div style={styles.typeIcon}>

                        {
                        getTypeIcon(trx.type)
                        }

                      </div>

                      {trx.type}

                    </div>

                  </td>

                  <td style={styles.td}>

                    <strong>
                      Ksh {trx.amount}
                    </strong>

                  </td>

                  <td style={styles.td}>

                    <div
                      style={ {
                        ...styles.status,

                        background:
                        `${getStatusColor(
                          trx.status
                        )}20`,

                        color:
                        getStatusColor(
                          trx.status
                        )
                      }}
                      >

                      {
                      getStatusIcon(
                        trx.status
                      )
                      }

                      {trx.status}

                    </div>

                  </td>

                  <td style={styles.td}>

                    {trx.date}

                  </td>

                </tr>

              ))
              }

            </tbody>

          </table>

        </div>

        {/* MODAL */}

        {
        selectedTransaction && (

          <div
            style={styles.overlay}

            onClick={()=>
            setSelectedTransaction(null)
            }
            >

            <div

              style={styles.modal}

              onClick={(e)=>
              e.stopPropagation()
              }
              >

              {/* MODAL HEADER */}

              <div style={styles.modalHeader}>

                <div>

                  <h2>
                    Transaction Details
                  </h2>

                  <p style={styles.modalText}>
                    Full transaction info
                  </p>

                </div>

                <button
                  style={styles.closeButton}

                  onClick={()=>
                  setSelectedTransaction(
                    null
                  )
                  }
                  >

                  <FaTimes />

                </button>

              </div>

              {/* TOP CARD */}

              <div style={styles.topCard}>

                <div style={styles.topIcon}>

                  {
                  getTypeIcon(
                    selectedTransaction.type
                  )
                  }

                </div>

                <div>

                  <h2>

                    {
                    selectedTransaction.item
                    }

                  </h2>

                  <p style={styles.grayText}>

                    {
                    selectedTransaction.type
                    }

                  </p>

                </div>

              </div>

              {/* DETAILS */}

              <div style={styles.detailsGrid}>

                <div style={styles.detailCard}>

                  <p style={styles.detailLabel}>
                    Transaction ID
                  </p>

                  <h4>
                    {
                    selectedTransaction.id
                    }
                  </h4>

                </div>

                <div style={styles.detailCard}>

                  <p style={styles.detailLabel}>
                    Amount
                  </p>

                  <h4>
                    Ksh {
                    selectedTransaction.amount
                    }
                  </h4>

                </div>

                <div style={styles.detailCard}>

                  <p style={styles.detailLabel}>
                    Phone Number
                  </p>

                  <h4>
                    {
                    selectedTransaction.phone
                    }
                  </h4>

                </div>

                <div style={styles.detailCard}>

                  <p style={styles.detailLabel}>
                    Network
                  </p>

                  <h4>
                    {
                    selectedTransaction.network
                    }
                  </h4>

                </div>

                <div style={styles.detailCard}>

                  <p style={styles.detailLabel}>
                    Payment Method
                  </p>

                  <h4>
                    {
                    selectedTransaction.method
                    }
                  </h4>

                </div>

                <div style={styles.detailCard}>

                  <p style={styles.detailLabel}>
                    Receipt
                  </p>

                  <h4>
                    {
                    selectedTransaction.receipt
                    }
                  </h4>

                </div>

              </div>

              {/* STATUS */}

              <div
                style={ {
                  ...styles.bigStatus,

                  background:
                  `${getStatusColor(
                    selectedTransaction.status
                  )}20`,

                  color:
                  getStatusColor(
                    selectedTransaction.status
                  )
                }}
                >

                {
                getStatusIcon(
                  selectedTransaction.status
                )
                }

                {
                selectedTransaction.status
                }

              </div>

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
    marginBottom: "25px"
  },

  title: {
    fontSize: "32px",
    color: "#0f172a"
  },

  subtitle: {
    color: "#64748b",
    marginTop: "5px"
  },

  searchBox: {
    background: "white",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 18px",
    borderRadius: "18px",
    marginBottom: "25px",
    boxShadow:
    "0 2px 10px rgba(0,0,0,.05)"
  },

  searchInput: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "15px"
  },

  tableContainer: {
    background: "white",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow:
    "0 2px 10px rgba(0,0,0,.05)"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  th: {
    textAlign: "left",
    padding: "20px",
    background: "#f8fafc",
    color: "#64748b",
    fontSize: "14px"
  },

  td: {
    padding: "20px",
    borderTop: "1px solid #f1f5f9"
  },

  row: {
    cursor: "pointer",
    transition: ".3s"
  },

  grayText: {
    color: "#64748b",
    marginTop: "5px"
  },

  typeBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600"
  },

  typeIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    background: "#ede9fe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#5B3DF5"
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "fit-content",
    padding: "10px 14px",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: "14px"
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
    width: "600px",
    background: "white",
    borderRadius: "28px",
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

  topCard: {
    background: "#f8fafc",
    padding: "24px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "25px"
  },

  topIcon: {
    width: "70px",
    height: "70px",
    borderRadius: "20px",
    background: "#5B3DF5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "24px"
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns:
    "1fr 1fr",
    gap: "20px"
  },

  detailCard: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "18px"
  },

  detailLabel: {
    color: "#64748b",
    marginBottom: "8px"
  },

  bigStatus: {
    marginTop: "30px",
    padding: "18px",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    fontWeight: "700",
    fontSize: "18px"
  }

};

export default Transactions;