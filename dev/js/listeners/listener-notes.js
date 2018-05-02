export default function(state=null, action){
    switch(action.type){
        case "NOTE_ADD":
            console.log("NOTE_ADD");
            return action.payload;
            break;
        case "NOTE_EDIT":
            console.log("NOTE_EDIT");
            return action.payload;
            break;
        case "NOTE_REMOVE":
            console.log("NOTE_REMOVE");
            return action.payload;
            break;
        case "EDIT_SAVE":
            console.log("EDIT_SAVE");
            return action.payload;
            break;
        case "EDIT_CANCEL":
            console.log("EDIT_CANCEL");
            return action.payload;
            break;
        default:
            return state;
    }
}