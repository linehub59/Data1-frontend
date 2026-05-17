import AdminLayout from "../../../layouts/mobile/Admin";
import StatCard from "../../../components/web/StatCard";
import GreetingCard from "../../../components/web/GreetingCard";
import PageTitle from "../../../components/web/PageTitle";

import WelcomeCard from "../../../components/web/WelcomeCard";
import RecentCard from "../../../components/web/RecentCard";




import {
  FaUsers,
  FaMoneyBill,
  FaExchangeAlt
} from "react-icons/fa";

function Dashboard() {

  return(

    <AdminLayout>

      <PageTitle />
      <WelcomeCard />


      <div style={styles.grid}>

        <StatCard
          title="Total Users"
          value="0"
          icon={<FaUsers />}
          color="#5B3DF5"
          />

        <StatCard
          title="Total Sales"
          value="0"
          icon={<FaMoneyBill />}
          color="#22c55e"
          />


      </div>
      <RecentCard
        transactions={[]}
        />
    </AdminLayout>

  )
}

const styles = {


  grid: {
    display: "grid",
    gridTemplateColumns:
    "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "30px"
  }

}

export default Dashboard;