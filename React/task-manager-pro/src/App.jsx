import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const filteredTasks =
    filter === "Completed"
      ? tasks.filter((item) => item.completed)
      : filter === "Pending"
      ? tasks.filter((item) => !item.completed)
      : tasks;

  const total = tasks.length;
  const completed = tasks.filter((item) => item.completed).length;
  const pending = total - completed;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Task Manager Pro
        </h1>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold">Total</h3>
            <p className="text-3xl">{total}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold">Completed</h3>
            <p className="text-3xl">{completed}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-bold">Pending</h3>
            <p className="text-3xl">{pending}</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 border p-3 rounded"
            />

            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-5 rounded"
            >
              Add
            </button>
          </div>
        </div>

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-3 rounded"
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredTasks.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTask(item.id)}
                />

                <h3
                  className={
                    item.completed
                      ? "line-through text-gray-400"
                      : ""
                  }
                >
                  {item.title}
                </h3>

              </div>

              <button
                onClick={() => deleteTask(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;