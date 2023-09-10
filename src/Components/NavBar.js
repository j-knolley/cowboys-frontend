import { NavLink } from "react-router-dom";
;

// export default function NavBar() {
//   return (
//     <nav className="NavBar">
//       <h1>
//         <NavLink className="NavLink" to="/">Dallas Cowboys</NavLink>
//         <NavLink className="NavLink" to="/players/new">New Player</NavLink>
//       </h1>
//     </nav>
//   );
// }

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h1 className="NavLinksContainer">
        <NavLink className="NavLink" to="/">Homepage</NavLink>
        <span className="NavLinkSpacer"></span>
        <NavLink className="NavLinkButton" to="/players/new">
          New Player
        </NavLink>
      </h1>
    </nav>
  );
}
