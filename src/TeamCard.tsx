import type {Team} from "./types";


type TeamProps = {
  team: Team;
};

function TeamCard({team}: TeamProps) {
  return (
    <div>
      <h2>{team.teamName}</h2>
      <p>{team.school}</p>
    </div>
  );
}

export default TeamCard;