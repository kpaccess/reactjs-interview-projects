import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* Accordion component */}
      {/* <Accordion /> */}
      <Link to="accordion">Accordion</Link>
      <Link to="random-color">Random color</Link>
      <Outlet />
    </>
  );
}

export default App;
