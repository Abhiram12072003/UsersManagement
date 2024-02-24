import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import './Users.css';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function Users() {
  
  let [users,setUsers]=useState([]);
  
  let [err,setErr]=useState("");
  
  let [show,setShow]=useState(false);

  let [useredit,setUseredit] = useState({});
  
  let {
    register,
    handleSubmit,
    formState:{errors},
    setValue,
    getValues
  } = useForm();

  let showModal=()=>setShow(true);
  
  let closeModal=()=>setShow(false);
  
  let addNewUser=(userObj)=>{};

  let getUsers=()=>{
    axios.get("http://localhost:3000/users")
    .then(response=>{
      console.log(response);
      if(response.status===200){
        console.log(response.data);
        setUsers(response.data);
        setErr("");
      }
    })
    .catch(
      function(err){
        // console.log(err.message);
        if(err.response){
          setErr(err.message);
        }
        else if(err.request){
          setErr(err.message);
        }
        else{
          setErr(err.message);
        }
      }
    )
  }

  useEffect(getUsers,[]);

  let editUser=(userObj)=>{
    showModal();
    setValue("name",userObj.name);
    setValue("email",userObj.email);
    setValue("dob",userObj.dob);
    setValue("image",userObj.image); 
    setUseredit(userObj);
  }

  let deleteUser=(userObj)=>{
    axios.post(`http://localhost:3000/removedusers`,userObj)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err.message));
    axios.delete(`http://localhost:3000/users/${userObj.id}`)
    .then((res)=>{ 
      if(res.status===200){
        console.log("axios",res.data);
        getUsers();
      }
    })
  }

  let saveUser=()=>{
    let modifiedUser=getValues();
    console.log(modifiedUser);
    modifiedUser.id=useredit.id;
    //Make http put request to edit user
    axios.put(`http://localhost:3000/users/${modifiedUser.id}`,modifiedUser)
    .then(res=>{
      if(res.status===200){
        getUsers();
      }
    })
    closeModal();
  }

  return (
    <div>
      {err.length!==0 && <p className='text-danger display-3'>{err}</p>}
      {err.length===0 && <div>
        <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 mx-auto g-4 users'>
          {
            users.map((userObj)=><div key={userObj.id} className='col text-center'>
              <div className='card'>
                <img src={userObj.image} className="p-2 card-img-top profile-image mx-auto" alt="..."/>
                <div className="card-body">
                  <p className="display-3 name">{userObj.name}</p>
                  <p className='lead fs-4'>{userObj.email}</p>
                  <p className='lead'>DOB: {userObj.dob}</p>
                  <button className='btn btn-warning m-1' onClick={()=>{editUser(userObj)}}><AiFillEdit className='m-1'/>Edit</button>
                  <button className='btn btn-danger m-1' onClick={()=>{deleteUser(userObj)}}><AiFillDelete className='m-1'/>Delete</button>
                </div>
              </div>
            </div>)
          }
        </div>
        <Modal
        show={show}
        onHide={closeModal}
        backdrop="static"
        centered
        className='modal'
        >
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(addNewUser)}>
              {/* name */}
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input 
                  type="text" id="name" className='form-control' 
                  {...register('name',)} 
                />
                {errors.name?.type==='required' && <p className='text-danger'>* Name is required</p>}
              </div>
              {/* email */}
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input 
                  type="text" id="email" className='form-control' 
                  {...register('email',)} 
                />            
                {errors.email?.type==='required' && <p className='text-danger'>* Email is required</p>}
              </div>
              {/* date of birth */}
              <div className='mb-3'>
                <label htmlFor='dob' className='form-label'>Date of Birth</label>
                <input 
                  type="date" id="dob" className='form-control' 
                  {...register('dob')} 
                />
                {errors.dob?.type==='required' && <p className='text-danger'>* Date of Birth is required</p>}
              </div>
              {/* user image */}
              <div className='mb-3'>
                <label htmlFor='image' className='form-label'>User Image</label>
                <input 
                  type="text" id="image" className='form-control' 
                  {...register('image',)}
                  disabled
                />
                {errors.image?.type==='required' && <p className='text-danger'>* Image link is required</p>} 
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={saveUser}>Save</Button>
          </Modal.Footer>
        </Modal>
        </div>}
    </div>
  )
}

export default Users;