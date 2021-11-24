import React, { Component } from 'react';
import { Card, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class Menu extends Component {

  constructor(props) {
      super(props);
      this.state = {
          selectedDish: null
      }
  }

  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }
  renderDish(dish) {      
      if (dish != null)
          return(
                  <CardBody>
                    <h3>{'Họ và tên: ' + dish.name}</h3>
                    <CardText>{'Ngày sinh: ' + dateFormat(dish.doB, "dd/mm/yyyy")}</CardText>
                    {/* <CardText>{'Ngày vào công ty: ' + dateFormat(dish.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>{'Phòng ban: ' + dish.department.name}</CardText>
                    <CardText>{'Số ngày nghỉ còn lại: ' + dish.annualLeave}</CardText>
                    <CardText>{'Số ngày đã làm thêm: ' + dish.overTime}</CardText> */}
                  </CardBody>
          );
      else
          return(
              <div>Bấm vào tên nhân viên để xem thông tin</div>
          );
  }
  
  render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div className="col-3 col-md-5 m-4">
              <Card key={dish.id}
                onClick={() => this.onDishSelect(dish)}>
                
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
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
                <div  className="col-12 col-md-5 m-5">
                  {this.renderDish(this.state.selectedDish)}
                </div>
              </div>
          </div>
      );
  }
}

export default Menu;