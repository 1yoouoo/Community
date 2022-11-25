import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/SignIn");
  }

  return (
    <>
      <div>Main</div>
      <div>
        <button onClick={onClick}>Login</button>
      </div>
    </>
  );
}

export default App;
