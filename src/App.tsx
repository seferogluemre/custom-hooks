import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>("");

  async function fetchTodos() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/2"
      );
      const data = await response.json();
      setTodo(data);
      setLoading(false);
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      {error ? (
        error
      ) : loading ? (
        <div>Yükleniyor....</div>
      ) : (
        <div>{JSON.stringify(todo)}</div>
      )}
    </>
  );
}

export default App;
