import { NavLink } from "react-router-dom";
;

// export default function NavSidebar() {
//     return (
//       <nav className="NavSide">
//         <p>
//           <NavLink className="SideBar" to="/players">Players</NavLink>
//           </p>
//       </nav>
//     );
//   }

export default function NavSidebar() {
  return (
    <nav className="NavSide">
      <p>
        <NavLink className="SidebarLink" to="/players">Players</NavLink>
      </p>
    </nav>
  );
}
  