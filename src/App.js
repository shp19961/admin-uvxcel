import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminNavbar from './admin-section/AdminNavbar'
import Users from './admin-section/Users'
import Subscribers from './admin-section/Subscribers'
import AdminHomePage from "./admin-section/AdminHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<AdminHomePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/subscribers" element={<Subscribers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
