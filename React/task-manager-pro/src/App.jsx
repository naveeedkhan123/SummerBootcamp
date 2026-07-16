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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-white mb-3">
          Task Manager Pro
        </h1>

        <p className="text-center text-slate-300 mb-10">
          Organize your work and boost productivity
        </p>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-white">
            <h3 className="text-slate-300 mb-2">Total Tasks</h3>
            <p className="text-4xl font-bold">{total}</p>
          </div>

          <div className="bg-green-500/20 backdrop-blur-lg border border-green-500/20 rounded-2xl p-6 text-white">
            <h3 className="text-green-300 mb-2">Completed</h3>
            <p className="text-4xl font-bold">{completed}</p>
          </div>

          <div className="bg-yellow-500/20 backdrop-blur-lg border border-yellow-500/20 rounded-2xl p-6 text-white">
            <h3 className="text-yellow-300 mb-2">Pending</h3>
            <p className="text-4xl font-bold">{pending}</p>
          </div>

        </div>

        {/* Add Task */}

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-8">

          <div className="flex flex-col md:flex-row gap-3">

            <input
              type="text"
              placeholder="Enter a new task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="flex-1 bg-slate-800 text-white border border-slate-700 p-4 rounded-xl outline-none"
            />

            <button
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Add Task
            </button>

          </div>

        </div>

        {/* Filter */}

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-slate-800 text-white border border-slate-700 p-3 rounded-xl"
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>

        {/* Tasks */}

        <div className="space-y-4">

          {filteredTasks.length === 0 && (
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-10 text-center text-slate-300">
              No tasks found
            </div>
          )}

          {filteredTasks.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">

                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTask(item.id)}
                  className="w-5 h-5"
                />

                <h3
                  className={`text-lg ${
                    item.completed
                      ? "line-through text-slate-500"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </h3>

              </div>

              <button
                onClick={() => deleteTask(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
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