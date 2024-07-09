import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="accordion">Accordion</Link>
      <Link to="random-color">Random color</Link>
      <Link to="start-rating">Star Rating</Link>
      <Outlet />
    </>
  );
}

export default App;
