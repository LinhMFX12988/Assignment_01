import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/StaffListComponent";
import "./App.css";
import { STAFFS } from './shared/staffs';
import "./components/lightMode";
 
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: STAFFS,
      darkMode:false,
    };
  }
  render() {
    // const [darkMode, setDarkMode] = useState(false);
    return (
      
      <div className={this.state.darkMode ? "dark-mode" : "light-mode"} >
        <Navbar dark color="primary">
          <div className="container"> 
            <NavbarBrand>Ứng dụng quản lí nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <div className={this.state.darkMode ? "dark-mode" : "light-mode"}>
        <div className="container-2">
        <Menu dishes={this.state.dishes} /> 
          <span style={{ color: this.state.darkModedarkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => this.setState({darkMode: !this.state.darkMode})} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: this.state.darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>        
      </div>    
               
      </div>
    );
  }
}

export default App;
