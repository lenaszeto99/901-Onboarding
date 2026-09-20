import type {Team} from './types';
import TeamCard from './TeamCard';
import { useState } from 'react';


type TeamsPropList = {
  teams: Team[];
};

function TeamList({teams}: TeamsPropList) {
// adding selection state   
// initial state is null
          //state          //setter                 // string or null
const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);//useState(null);

function updateSelectedTeamId(id: string) {
  setSelectedTeamId(id); // sets selected team id to the id of the team that was clicked
}

// find the selected team from the teams array
const selectedTeam = teams.find((team) => team.id === selectedTeamId);

  return (
    // display selected team name or 'None' if no team is selected
    //<!-- .map loop thru every team in teams array-->
    <div>
        <h1>Selected: {selectedTeam ? selectedTeam.teamName : 'None'}</h1>
      
      {teams.map((team) => (
        // pass team, isSelected, and onSelect as props to TeamCard component
        <TeamCard
          // unique identifier for each team card
          key={team.id}
          team={team}
          isSelected={team.id === selectedTeamId}
          onSelect={() => updateSelectedTeamId(team.id)}
        />
      ))}
    </div>
  );
}

// // makes info available to other files
export default TeamList;