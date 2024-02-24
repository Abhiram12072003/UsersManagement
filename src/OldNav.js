// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaUsers, FaUsersSlash } from 'react-icons/fa'; 
// import './NavigationBar.css';
// import { Navbar, Nav } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';

// function NavigationBar() {
  
//   const activeLink={
//     color:"#EEF0F1",
//     fontSize:"1.2rem",
//     fontWeight:"bold"
//   }
  
//   const inactiveLink={
//     color:"#EEF0F2",
//     fontSize:"1.2rem"
//   }

//   return (
//     <div>
//       <Navbar>
//         <Container>
//           <Navbar.Brand href='/'>
//             <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/WLM_logo-2.svg" height="45px" width="45px" alt="" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className='me-auto'>
//               <Nav.Link 
//               href='/users'
//               // style={({isActive})=>{
//               //   return isActive? activeLink:inactiveLink;
//               // }}
//               >
//                 <FaUsers className='users-icon'/>Users
//               </Nav.Link>
//               <Nav.Link
//               href='/remove-user'
//               // style={({isActive})=>{
//               //   return isActive? activeLink: inactiveLink;
//               // }}
//               >
//                 <FaUsersSlash className='removed-users-icon'/>Remove users
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default NavigationBar