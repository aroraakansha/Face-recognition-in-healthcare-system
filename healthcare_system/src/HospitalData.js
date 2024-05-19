import React, { Component, useEffect, useState } from "react";
import axios from "axios";
export default function HospitalData({ userData }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/Hospital")
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
              <th>Name</th>
              <th>Pincoded</th>
              <th>PhoneNo</th>
              <th>Emerg Contact</th>            
              <th>State</th>
              <th>District</th>
              <th>Address</th> 
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{
            users.map(user=>{
                return <tr>
                <td>{user.name}</td>
                <td>{user.pincode}</td>
                <td>{user.phone}</td>
                <td>{user.emergency}</td>
                <td>{user.state}</td>
                <td>{user.district}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                </tr>
            })
          } </tbody>
        </table>
        </div>
      </div>
    </>
  );
}