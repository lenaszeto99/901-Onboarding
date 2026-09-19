import type {Team} from './types';
import TeamCard from './TeamCard';

type TeamsPropList = {
  teams: Team[];
};

function TeamList({teams}: TeamsPropList) {
  return (
    <div>
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}

export default TeamList;