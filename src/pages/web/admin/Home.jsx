import AdminLayout from "../../../layouts/web/Admin";
import StatCard from "../../../components/web/StatCard";

import {
  FaUsers,
  FaMoneyBill,
  FaExchangeAlt
} from "react-icons/fa";

function Dashboard() {

  return(

    <AdminLayout>

      <h1>Dashboard</h1>

      <div style={styles.grid}>

        <StatCard
          title="Total Users"
          value="12,458"
          icon={<FaUsers />}
          color="#5B3DF5"
          />

        <StatCard
          title="Total Sales"
          value="Ksh 1.2M"
          icon={<FaMoneyBill />}
          color="#22c55e"
          />

        <StatCard
          title="Transactions"
          value="24,856"
          icon={<FaExchangeAlt />}
          color="#f59e0b"
          />

      </div>

 </AdminLayout>

      )
      }

      const styles = {

      grid: {
        display: "grid",
        gridTemplateColumns:
        "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginTop: "30px"
      }

      }

      export default Dashboard;