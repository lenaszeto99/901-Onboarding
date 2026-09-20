import TeamCard from './TeamCard';
import type {Team} from './types';
import TeamList from './TeamList';
import getTeamStatus from './getTeamStatus';

                        // once Promise finishes run with the result
getTeamStatus('1').then((result) => {
  console.log('Team 1:', result);
});

getTeamStatus('999').then((result) => {
  console.log('Team 999:', result);
});

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
  // test case
  //const teamArray: Team[] = [];
  //if (teamArray.length === 0) {
    //return <div>No teams yet</div>;
  //}
  
  // array of teams 
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

// returns team array
return ( 
  <div>
    {/* <h1>Selected Team: {teamName}</h1> */}
    <TeamList teams={teamArray} />
  </div>
)

}

// makes info available to other files
export default MakeTeamArray;