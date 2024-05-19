import React, { Component, useEffect, useState } from "react";
import axios from "axios";
export default function PrintDoner({ userData }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/registerdoner")
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
              <th>PhoneNo</th>
              <th>Address</th>             
              <th>State</th>
              <th>District</th>
              <th>BloodGroup</th>
            </tr>
          </thead>
          <tbody>{
            users.map(user=>{
                return <tr>
                <td>{user.Name}</td>
                <td>{user.Phoneno}</td>
                <td>{user.Address}</td>
                <td>{user.State}</td>
                <td>{user.District}</td>
                <td>{user. BloodGroup}</td>
                </tr>
            })
          } </tbody>
        </table>
        </div>
      </div>
    </>
  );
}
