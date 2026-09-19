import TeamCard from './TeamCard';
import type {Team} from './types';

function App() {
  const myTeam: Team = {
    id: '1',
    teamName: 'Hello Kitty',
    school: 'Sanrio University',
  };

  return (
    <div>
      <TeamCard team={myTeam} />
    </div>
  );
}

export default App;