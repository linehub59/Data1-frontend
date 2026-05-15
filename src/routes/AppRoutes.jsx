import {
  Routes,
  Route
} from "react-router-dom";

import Splash from "../pages/mobile/admin/Splash";
import Auth from "../pages/mobile/admin/Auth";
import Dashboard from "../pages/mobile/admin/Home";
import Profile from "../pages/mobile/admin/Profile";
import Bundles from "../pages/mobile/admin/Bundles";
import Transactions from "../pages/mobile/admin/Transactions";
import User from "../pages/mobile/admin/User";



function AppRoutes() {

  return(
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/bundles" element={<Bundles />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/user" element={<User />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes;