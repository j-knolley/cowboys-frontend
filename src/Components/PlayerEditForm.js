import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '/Users/jnawlee/Desktop/fullstack-portfolio-project/cowboys-react/src/styles.css'

function PlayerEditForm() {
  // Extract the 'id' parameter from the URL
  let { id } = useParams();
  // Get a function to navigate to different routes
  let navigate = useNavigate();
  // Get the API URL from environment variables
  const API = process.env.REACT_APP_API_URL;

  // State to store kick details
  const [player, setPlayer] = useState({
    name: "",
    position: "",
    player_number: "",
    team: "",
  });

  // Handler for text input changes
  const handleTextChange = (event) => {
    setPlayer({ ...player, [event.target.id]: event.target.value });
  };

  // Handler for checkbox changes
  // const handleCheckboxChange = () => {
  //   setKick({ ...player, is_favorite: !kick.is_favorite });
  // };

  // Effect to fetch player data from the API when 'id' or 'API' changes
  useEffect(() => {
    axios
      .get(`${API}/players/${id}`)
      .then(
        (response) => {
          // Set the retrieved kick data in the state
          setPlayer(response.data);
        },
        (err) => {
          console.error(err);
          // Navigate to a 'not-found' route if there's an error
          navigate(`/not-found`);
        }
      )
      .catch((c) => console.warn("catch", c));
  }, [id, navigate, API]);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the 'updateKick' function to send updated kick data
    updatePlayer(player, id);
  };

  // Function to update kick data via API
  const updatePlayer = (updatedPlayer) => {
    axios
      .put(`${API}/players/${id}`, updatedPlayer)
      .then(
        () => {
          // Navigate to the kick details page after successful update
          navigate(`/players/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  // Render the form
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        {/* Input fields for kick details */}
        <label htmlFor="name">Player:</label>
        <input
          id="name"
          value={player.name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          value={player.position}
          onChange={handleTextChange}
        />
        <label htmlFor="player_number">Player Number</label>
        <input
          type="text"
          id="player_number"
          name="player_number"
          value={player.player_number}
          onChange={handleTextChange}
          placeholder=""
        />
        <label htmlFor="total_yards">Total Yards</label>
        <input
          id="total_yards"
          type="text"
          value={player.total_yards}
          onChange={handleTextChange}
        />
        <label htmlFor="touchdowns">Touchdowns</label>
        <input
          id="touchdowns"
          type="text"
          value={player.touchdowns}
          onChange={handleTextChange}
        />
        <label htmlFor="attempts">Attempts</label>
        <input
          id="attempts"
          type="text"
          value={player.attempts}
          onChange={handleTextChange}
        />
        <label htmlFor="completions">Completions</label>
        <input
          id="completions"
          type="text"
          value={player.completions}
          onChange={handleTextChange}
        />
        <label htmlFor="long">Long</label>
        <input
          id="long"
          type="text"
          value={player.long}
          onChange={handleTextChange}
        />
        <label htmlFor="opponent">Opponent</label>
        <input
          id="opponent"
          type="text"
          value={player.opponent}
          onChange={handleTextChange}
        />

        {/* <label htmlFor="time">Favorite</label>
        <input
          id="time"
          type="text"
          name="time"
          value={kick.time}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={kick.is_favorite}
        /> */}
        
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PlayerEditForm;

