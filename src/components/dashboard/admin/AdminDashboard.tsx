import { useEffect } from "react";
import readToken from "../../../pages/api/token/readToken";

const AdminDashboard = () => {
  useEffect(() => {
    const token: any = readToken();
    console.log(token.roles);
  }, []);

  return <div>Admin Dashboard</div>;
};

export default AdminDashboard;
