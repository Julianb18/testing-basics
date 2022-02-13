import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Todo } from "./components/Todo/Todo";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "cook", completed: true },
  ];
  return (
    <div className="App">
      <Input isVisible={true} />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} />
        </div>
      ))}
      <div className="flex justify-center">
        <Button label="CLICK ME" />
      </div>
    </div>
  );
}

export default App;
