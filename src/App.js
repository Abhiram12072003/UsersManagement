import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import AddUser from './Components/addUser/AddUser';
import Users from './Components/users/Users';
import RemovedUsers from './Components/removedUsers/RemovedUsers';


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <RootLayout />,
      children:[
        {
          path:'/',
          element:<AddUser />
        },
        {
          path:"/users",
          element:<Users />
        },
        {
          path:"/remove-user",
          element: <RemovedUsers />
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
