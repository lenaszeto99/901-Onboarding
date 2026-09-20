import type {Team} from "./types";
//import TeamList from "./TeamList";

type TeamProps = {
  team: Team;
  isSelected: boolean; // if selected true or false
  onSelect: () => void; // 
};

// react component that takes in team, isSelected, and onSelect as props
function TeamCard({team, isSelected, onSelect}: TeamProps) {
    // function that handles click event
    function handleClick() {
        onSelect(); // call onSelect function when button is clicked
        //alert(`${team.teamName}`);
    }
  return (
    // when button is clicked calls handleClick function
    <button onClick={handleClick}
        // change background color when clicked
        style={
            {backgroundColor: isSelected ? 'pink' : 'white'}
        }>
    
    <div>
      <h2>{team.teamName}</h2>
      <p>{team.school}</p>
    </div>
    </button>
  );// display team name and school

}
export default TeamCard;
