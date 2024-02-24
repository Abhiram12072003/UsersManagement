import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddUser.css';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  let navigate=useNavigate();
  let {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  let [err,setErr] = useState("");
  let addNewUser=(newuser)=>{
    // console.log('beres',newuser);
    axios.post("http://localhost:3000/users",newuser)
      .then(response=>{console.log('res',response)
      if(response.status===201){
        setErr("");
        navigate("/users")
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
      );
  };
  
  return (<div className='add-User'>
    {err.length!==0 && <p className='display-3 text-danger'>{err}</p>}
    {err.length===0 && <div>
    <p className='display-3 text-center'>Add new user</p>
    <div className='row'>
      <div className='col-11 col-sm-8 col-md-6 mx-auto'>
        <form onSubmit={handleSubmit(addNewUser)}>
          {/* name */}
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input 
              type="text" id="name" className='form-control' 
              {...register('name',{required:true})} 
            />
            {errors.name?.type==='required' && <p className='text-danger'>* Name is required</p>}
          </div>
          {/* email */}
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input 
              type="text" id="email" className='form-control' 
              {...register('email',{required:true})} 
            />            
            {errors.email?.type==='required' && <p className='text-danger'>* Email is required</p>}
          </div>
          {/* date of birth */}
          <div className='mb-3'>
            <label htmlFor='dob' className='form-label'>Date of Birth</label>
            <input 
              type="date" id="dob" className='form-control' 
              {...register('dob',{required:true})} 
            />
            {errors.dob?.type==='required' && <p className='text-danger'>* Date of Birth is required</p>}
          </div>
          {/* user image */}
          <div className='mb-3'>
            <label htmlFor='image' className='form-label'>User Image</label>
            <input 
              type="text" id="image" className='form-control' 
              {...register('image',{required:true})}
            />
            {errors.image?.type==='required' && <p className='text-danger'>* Image link is required</p>} 
          </div>
          <div className='mb-3 text-center'>
            <button type="submit" className='btn btn-success'>Create New User</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    }
    </div>)
}

export default AddUser;