import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      let url = `/tasks?page=${page}`;

      if (filter !== "") {
        url += `&completed=${filter}`;
      }

      const res = await API.get(url);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter, page]);

  // CREATE TASK
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", form);
      setForm({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      alert("Error creating task");
    }
  };

  // DELETE TASK
  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  // TOGGLE COMPLETE
  const toggleComplete = async (task) => {
    await API.put(`/tasks/${task._id}`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* CREATE TASK */}
      <form onSubmit={handleCreate} className="mb-6">
        <input
          placeholder="Title"
          className="border p-2 mr-2"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Description"
          className="border p-2 mr-2"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Add
        </button>
      </form>

      {/* FILTER */}
      <div className="mb-4">
        <button
          className="mr-2"
          onClick={() => setFilter("")}
        >
          All
        </button>
        <button
          className="mr-2"
          onClick={() => setFilter("true")}
        >
          Completed
        </button>
        <button onClick={() => setFilter("false")}>
          Pending
        </button>
      </div>

      {/* TASK LIST */}
      <div>
        {tasks.map((task) => (
          <div
            key={task._id}
            className="border p-3 mb-2 flex justify-between items-center"
          >
            <div>
              <h3
                className={`font-bold ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.title}
              </h3>
              <p>{task.description}</p>
            </div>

            <div>
              <button
                className="mr-2 text-green-600"
                onClick={() => toggleComplete(task)}
              >
                ✔
              </button>

              <button
                className="text-red-600"
                onClick={() => handleDelete(task._id)}
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="mt-4">
        <button
          className="mr-2"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          className="ml-2"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default Dashboard;