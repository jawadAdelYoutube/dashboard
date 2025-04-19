import { useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-[100vh]">
      <div className="w-64 bg-gray-200 p-4">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
