function notes(state=[], action){
    console.log(action);
    
    switch(action.type){
        case "NOTE_ADD":
            var note = {
                id: state.length,
                Header: "",
                Body: "",
                Color: "#b6e5e6",
                Font: "",
                FontColor: "",
                X: 0,
                Y: 0,
                EditMode : true
            };

            return [
                ...state,
                note 
            ];

            break;
        case "NOTE_EDIT":
            return [
                ...state.slice(0,i),
                
                ...state.slice(i + 1)
            ];

            break;
        case "NOTE_REMOVE": 
            const i = action.payload.id -1;       
            return [
                ...state.slice(0,i),
                ...state.slice(i + 1)
            ];

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

export default notes;