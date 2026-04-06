// import { useEffect, useState } from "react";
// import API from "../api/api";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [tasks, setTasks] = useState([]);

//   // FETCH USERS
//   const fetchUsers = async () => {
//     try {
//       const res = await API.get("/admin/users");
//       setUsers(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // FETCH TASKS
//   const fetchTasks = async () => {
//     try {
//       const res = await API.get("/admin/tasks");
//       setTasks(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//     fetchTasks();
//   }, []);

//   return (
//     <div className="p-6 max-w-5xl mx-auto">

//       {/* TITLE */}
//       <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

//       {/* USERS */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-3">Users</h2>

//         <div className="border rounded">
//           {users.map((user) => (
//             <div
//               key={user._id}
//               className="p-3 border-b flex justify-between"
//             >
//               <span>{user.name}</span>
//               <span>{user.email}</span>
//               <span className="text-sm text-gray-500">
//                 {user.role}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* TASKS */}
//       <div>
//         <h2 className="text-xl font-semibold mb-3">Tasks</h2>

//         <div className="border rounded">
//           {tasks.map((task) => (
//             <div
//               key={task._id}
//               className="p-3 border-b"
//             >
//               <h3 className="font-bold">{task.title}</h3>
//               <p>{task.description}</p>

//               <div className="text-sm text-gray-600 mt-1">
//                 User: {task.user?.name} ({task.user?.email})
//               </div>

//               <div className="text-sm">
//                 Status:{" "}
//                 <span
//                   className={
//                     task.completed
//                       ? "text-green-600"
//                       : "text-red-600"
//                   }
//                 >
//                   {task.completed ? "Completed" : "Pending"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Admin;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Admin() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  // FETCH USERS
  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      const res = await API.get("/admin/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchTasks();
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">

      {/* TITLE + LOGOUT */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>

      {/* USERS */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Users</h2>

        <div className="border rounded">
          {users.map((user) => (
            <div
              key={user._id}
              className="p-3 border-b flex justify-between"
            >
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span className="text-sm text-gray-500">
                {user.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* TASKS */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Tasks</h2>

        <div className="border rounded">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="p-3 border-b"
            >
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>

              <div className="text-sm text-gray-600 mt-1">
                User: {task.user?.name} ({task.user?.email})
              </div>

              <div className="text-sm">
                Status:{" "}
                <span
                  className={
                    task.completed
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Admin;