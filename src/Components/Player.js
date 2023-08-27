import { Link } from "react-router-dom";

function Player({ player, id }) {
  return (
    <tr className="Player">
      <td>
        {player.team}
      </td>
      <td>
        <Link to={`/players/${id}`}>{player.name}</Link> {/* Creating a link to a specific route based on the 'id' prop, displaying 'kick.name' */}
      </td>
      <td>
        {player.position}
      </td>
      <td>
        {player.player_number}
      </td>
    </tr>
  );
}

export default Player; // Exporting the Kick component as the default export
