import {Permissions} from './wix-methods-mock';
import wixData from './wix-data-mock';
import {webMethod} from './wix-methods-mock';


// async returns a Promise not acual valie
const getTeamStatus = webMethod(Permissions.Anyone, async (teamId: string) => {
const team = await wixData.get('Teams', teamId); // await for Promise to resolve and return value

    if (team != null) {
    return {
        id: team._id, // .id to get id from wixData.get() return value
        teamName: team.teamName,
        approved: team.approved,
    };
    } else {
        return null;
    }
});

export default getTeamStatus;