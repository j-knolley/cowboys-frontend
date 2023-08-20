// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Import necessary dependencies from React and React Router
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import different page components
import Edit from "./Pages/Edit"; // Importing the Edit page component
import FourOFour from "./Pages/Four0Four"; // Importing the Four0Four (404) page component
import Home from "./Pages/Home"; // Importing the Home page component
import Index from "./Pages/Index"; // Importing the Index page component
import New from "./Pages/New"; // Importing the New page component
import Show from "./Pages/Show"; // Importing the Show page component

// Import the NavBar component
import NavBar from "./Components/NavBar.js";
import NavSidebar from "./Components/NavSideBar";

// Main component that defines the structure of the app
function App() {
  return (
    <div className="App">
      {/* Set up the React Router */}
      <Router>
        {/* Render the navigation bar */}
        <NavBar />
        <NavSidebar />
        <main>
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/players" element={<Index />} /> {/* Index page */}
            <Route path="/players/new" element={<New />} /> {/* New page */}
            <Route path="/players/:id" element={<Show />} /> {/* Show page */}
            <Route path="/players/:id/edit" element={<Edit />} /> {/* Edit page */}
            <Route path="*" element={<FourOFour />} /> {/* 404 page */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

// Export the main App component
export default App;

