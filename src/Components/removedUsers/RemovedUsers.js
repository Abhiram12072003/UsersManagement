import './RemovedUsers.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTrashRestore} from 'react-icons/fa';

function RemovedUsers() {
  
  let [removedusers,setRemovedusers]=useState([]);
  
  let getAllRemovedUsers=()=>{
    axios.get(`http://localhost:3000/removedusers`)
    .then((res)=>{setRemovedusers(res.data)})
    .catch((err)=>{console.log(err.message)})
  }

  useEffect(getAllRemovedUsers,[]);

  let restoreUser=(userObj)=>{
    
    axios.delete(`http://localhost:3000/removedusers/${userObj.id}`)
    .then((res)=>{
      if(res.status===200){
        getAllRemovedUsers();
      }
    })
    .catch((err)=>console.log(err.message))
    
    let user={name:userObj.name,email:userObj.email,dob:userObj.dob,image:userObj.image};
    
    axios.post(`http://localhost:3000/users`,user)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err.message));

  }

  let deleteUser=(userObj)=>{
    axios.delete(`http://localhost:3000/removedusers/${userObj.id}`)
    .then((res)=>{
      if(res.status===200){
        getAllRemovedUsers();
      }
    })
    .catch((err)=>console.log(err.message))
  }
  

  return (
    <div className='remove-users'> 
      {removedusers.length===0 && <div className='text-center'><p className='display-3 text-info'>No user have been removed</p></div>}       
      <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 mx-auto g-4 users'>
      {
        removedusers.map((userObj)=><div key={userObj.id} className='col text-center'>
          <div className='card'>
          <img src={userObj.image} className="p-2 card-img-top profile-image mx-auto" alt="..."/>
          <div className="card-body">
            <p className="display-3 name">{userObj.name}</p>
            <p className='lead fs-4'>{userObj.email}</p>
            <p className='lead'>DOB: {userObj.dob}</p>
            <button className='btn btn-warning m-1' onClick={()=>{restoreUser(userObj)}}><FaTrashRestore className='m-1'/>Restore</button>
            <button className='btn btn-warning m-1' onClick={()=>{deleteUser(userObj)}}>Delete</button>
          </div>
          </div>
        </div>)
      }
      </div>
    </div>
  )
}

export default RemovedUsers;