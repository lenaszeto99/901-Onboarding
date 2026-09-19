import TeamCard from './TeamCard';
import type {Team} from './types';
import TeamList from './TeamList';

function MakeTeam() {
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

//export default MakeTeam;

function MakeTeamArray() {
  //const teamArray: Team[] = [];
  //if (teamArray.length === 0) {
    //return <div>No teams yet</div>;
  //}
  
  const teamArray: Team[] = [
  {
    id: '1',
    teamName: 'Mofusand',
    school: 'Mofusand University',
  },
  {
    id: '2',
    teamName: 'Woody',
    school: 'Toy Story University',
  },
  {
    id: '3',
    teamName: 'Barbecue',
    school: 'Chips University',
  },
  {
    id: '4',
    teamName: 'Snoopy',
    school: 'Peanuts University',
  },
  {
    id: '5',
    teamName: 'Moana',
    school: 'Disney University',
  }
];


return ( 
  <div>
    <TeamList teams={teamArray} />
  </div>
)

}

export default MakeTeamArray;