import "./App.css";
import FunctionState from "./components/FunctionState";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">useState Hooks</h1>
      <FunctionState />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
