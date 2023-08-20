import { NavLink } from "react-router-dom";
//import "/Users/jnawlee/Desktop/fullstack-portfolio-project/cowboys-react/src/styles.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h1>
        <NavLink className="NavLink" to="/">Dallas Cowboys</NavLink>
        <NavLink className="NavLink" to="/players/new">New Player</NavLink>
      </h1>
    </nav>
  );
}
