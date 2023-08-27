import { NavLink } from "react-router-dom";
import "/Users/jnawlee/Desktop/fullstack-portfolio-project/cowboys-react/src/styles.css";

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
  