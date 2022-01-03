import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import StaffList from "./components/StaffList";
import "./App.css";
import { STAFFS } from "./shared/staffs";

function App() {
  const [staff] = useState(STAFFS);

    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lí nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={staff} />
      </div>
    );
}

export default App;
