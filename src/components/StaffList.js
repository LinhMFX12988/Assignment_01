import React, { useState } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

function StaffList(props) {
  const [selectorStaff, setSelectorStaff] = useState('Bấm vào tên nhân viên để xem thông tin');

  // handlerenderStaff = (staffs) => {  
  //  setSelectorStaff(
  //       <CardBody>
  //         <h3>{"Họ và tên: " + staffs.name}</h3>
  //         <CardText>
  //           {"Ngày sinh: " + dateFormat(staffs.doB, "dd/mm/yyyy")}
  //         </CardText>
  //         <CardText>  
  //           {"Ngày vào công ty: " + dateFormat(staffs.startDate, "dd/mm/yyyy")}
  //         </CardText>
  //         <CardText>{"Phòng ban: " + staffs.department.name}</CardText>
  //         <CardText>{"Số ngày nghỉ còn lại: " + staffs.annualLeave}</CardText>
  //         <CardText>{"Số ngày đã làm thêm: " + staffs.overTime}</CardText>
  //       </CardBody>
  //     );
  // }

  const renderStaff = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col- col-md-6 col-xl-4">
        <Card onClick={() => {
          setSelectorStaff(
            <CardBody>
              <h3>{"Họ và tên: " + staff.name}</h3>
              <CardText>
                {"Ngày sinh: " + dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                {"Ngày vào công ty: " + dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>{"Phòng ban: " + staff.department.name}</CardText>
              <CardText>{"Số ngày nghỉ còn lại: " + staff.annualLeave}</CardText>
              <CardText>{"Số ngày đã làm thêm: " + staff.overTime}</CardText>
            </CardBody>
          );
        }}>
          <CardTitle>{staff.name}</CardTitle>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{renderStaff}</div>      
        <div className="col-12 col-md-12 col-xl-12">
          {selectorStaff}
        </div>   
    </div>
  );
}

export default StaffList;
