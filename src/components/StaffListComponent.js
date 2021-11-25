import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class Menu extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedDish: null
      }
  }

  onDishSelect(staffs) {
      this.setState({ selectedDish: staffs});
  }
  renderDish(staffs) {      
      if (staffs != null)
          return(
                  <CardBody>
                    <h3>{'Họ và tên: ' + staffs.name}</h3>
                    <CardText>{'Ngày sinh: ' + dateFormat(staffs.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>{'Ngày vào công ty: ' + dateFormat(staffs.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>{'Phòng ban: ' + staffs.department.name}</CardText>
                    <CardText>{'Số ngày nghỉ còn lại: ' + staffs.annualLeave}</CardText>
                    <CardText>{'Số ngày đã làm thêm: ' + staffs.overTime}</CardText>
                  </CardBody>
          );  
      else
          return(
              <div>Bấm vào tên nhân viên để xem thông tin</div>
          );
  }
  
  render() {
      const menu = this.props.dishes.map((staffs) => {
          return (
            <div key={staffs.id} className="col- col-md-6 col-xl-4">
              <Card
                onClick={() => this.onDishSelect(staffs)}>               
                    <CardTitle>{staffs.name}</CardTitle>              
              </Card>
            </div>
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
              </div>
              <div className="row">
                <div  className="col-12 col-md-12 col-xl-12">
                  {this.renderDish(this.state.selectedDish)}
                </div>
              </div>
          </div>
      );
  }
}

export default Menu;

