import axios from "axios";
import { useState, useEffect } from "react";
import Player from "./Player"; // Importing the Kick component
import "/Users/jnawlee/Desktop/fullstack-portfolio-project/cowboys-react/src/styles.css"

// Get the API URL from environment variables
const API = process.env.REACT_APP_API_URL;

// React component to display a list of kicks
function Players() {
  // State to store the list of kicks
  const [players, setPlayers] = useState([]);

  // Effect to fetch kicks data from the API on component mount
  useEffect(() => {
    axios
      .get(`${API}/players`)
      .then(
        (response) => {
          // Log the retrieved data and set it in the kicks state
          console.log("response.data:");
          console.log(response.data);
          setPlayers(response.data);
        },
        (err) => console.error(err)
      )
      .catch((c) => console.warn("catch", c));
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render the list of kicks using the Kick component
  return (
    <div className="CenteredBox">
      <section>
        <table className="PlayersTable">
          <thead>
            <tr>
              <th>Team</th>
              <th>Name</th>
              <th>Position</th>
              <th>Player Number</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              // Render the Kick component for each kick
              return <Player key={player.id} player={player} id={player.id} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Players;
