import React from 'react';

const EmployeeDetails = ({ item }) => {
  const { name, email, phone, avatar } = item;

  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetails;
