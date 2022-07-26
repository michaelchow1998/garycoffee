import StaffDashboard from "../components/dashboard/staff/StaffDashboard";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard";
import readToken from "./api/token/readToken";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const token = readToken();
  const [adminLogin, setAdminLogin] = useState(false);
  const [staffLogin, setStaffLogin] = useState(false);
  useEffect(() => {
    if (token != null) {
      let role = token.roles[0];
      if (role == "ROLE_STAFF") {
        setStaffLogin(true);
        setAdminLogin(false);
      }
      if (role == "ROLE_ADMIN") {
        setStaffLogin(true);
        setAdminLogin(false);
      }
    }
  }, []);

  return (
    <div>
      {staffLogin ? <StaffDashboard /> : ""}
      {adminLogin ? <AdminDashboard /> : ""}
    </div>
  );
};

export default Dashboard;
