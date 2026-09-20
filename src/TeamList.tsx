import type {Team} from './types';
import TeamCard from './TeamCard';
import { useState } from 'react';


type TeamsPropList = {
  teams: Team[];
  // accepts two new props
  attributes: Record<string, string | null>, 
  dispatch: (eventName: string, detail?: unknown) => void;
};

function TeamList({teams, attributes, dispatch}: TeamsPropList) {
// adding selection state   
// initial state is null
          //state          //setter                 // string or null
const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);//useState(null);

function updateSelectedTeamId(id: string) {
  setSelectedTeamId(id); // sets selected team id to the id of the team that was clicked
  dispatch('requestTeamStatus', { teamId: id }); // dispatches event to request team status for the selected team
}

// find the selected team from the teams array
const selectedTeam = teams.find((team) => team.id === selectedTeamId);
const teamStatusAttr = attributes['team-status']; // get team status from attributes prop
const teamStatus = teamStatusAttr ? JSON.parse(teamStatusAttr) : null; // parse team status if it not null

function displayTeamStatus() {
  if (!selectedTeamId) {
    return null; // nothing selected yet
  }
  if (!teamStatus) {
    return <p>Loading...</p>;
  }
  if (teamStatus.approved) {
    return <p>Approved.</p>;
  } else {
    return <p>Pending Approval.</p>;
  }
}

  return (
    // display selected team name or 'None' if no team is selected
    //<!-- .map loop thru every team in teams array-->
    <div>
        <h1>Selected: {selectedTeam ? selectedTeam.teamName : 'None'}</h1>
        {displayTeamStatus()}
      {teams.map((team) => (
        // pass team, isSelected, and onSelect as props to TeamCard component
        <TeamCard
          // unique identifier for each team card
          key={team.id}
          team={team}
          isSelected={team.id == selectedTeamId}
          onSelect={() => updateSelectedTeamId(team.id)}
        />
      ))}
    </div>
  );
}

// // makes info available to other files
export default TeamList;