import React, { Component, useEffect, useState } from "react";
import axios from "axios";
export default function BookNow({ userData }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/Ambulance")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
      <div className="">
        <table className="table table-bordered table-hover"  >
        
          <thead>
            <tr>
              <th>DriverName</th>
              <th>PhoneNo</th>            
              <th>State</th>
              <th>District</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>{
            users.map(user=>{
                return <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.state}</td>
                <td>{user.district}</td>
                <td>{user. pincode}</td>
                </tr>
            })
          } </tbody>
        </table>
        </div>
      </div>
    </>
  );
}