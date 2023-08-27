import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Get the API URL from environment variables
const API = process.env.REACT_APP_API_URL;

// React component for creating a new kick entry
function PlayerNewForm() {
  // Get a function to navigate to different routes
  let navigate = useNavigate();
  // State to manage submission errors
  const [submitError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // State to manage kick details
  const [player, setPlayer] = useState({
    name: "",
    position: "",
    player_number: "",
    team: "",
  });

  // Function to send a POST request to add a new kick
  const addPlayer = (newPlayer) => {
    axios
      .post(`${API}/players`, newPlayer)
      .then(
        (response) => {
          // Navigate to the list of kicks after successful addition
          navigate(`/players`);
          setError(false);
        },
        (error) => {
          console.error(error);
          // Set error state and error message on API error
          setError(true);
          setErrorMessage(error);
        }
      )
      .catch((c) => console.warn("catch", c));
  };

  // Handler for text input changes
  const handleTextChange = (event) => {
    setPlayer({ ...player, [event.target.id]: event.target.value });
  };

  // Handler for checkbox changes
//   const handleCheckboxChange = () => {
//     setKick({ ...kick, is_favorite: !kick.is_favorite });
//   };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the 'addKick' function to send the new kick data
    addPlayer(player);
  };

  // Render the form
  return (
    <div className="New">
      {/* Display error message if submission error occurred */}
      {submitError ? <h2>There was an error: {errorMessage.Error}</h2> : null}
      <form onSubmit={handleSubmit}>
        {/* Input fields for kick details */}
        <label htmlFor="name">Player Name:</label>
        <input
          id="name"
          value={player.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="position">Position</label>
        <input
          id="position"
          type="text"
          value={player.position}
          onChange={handleTextChange}
          required
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
        <label htmlFor="team">Team</label>
        <input
          id="team"
          type="text"
          name="team"
          value={player.team}
          onChange={handleTextChange}
        />
        {/* <label htmlFor="is_favorite">Favorite</label>
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

export default PlayerNewForm;
