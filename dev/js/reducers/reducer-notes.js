function notes(state=[], action){
    
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
            var noteEdit = action.payload
            console.log(noteEdit);
            noteEdit.EditMode = true;
            console.log(noteEdit);
            
            return [
                ...state.slice(0, action.index),
                noteEdit,
                ...state.slice( action.index + 1)
            ];

            break;
        case "NOTE_REMOVE": 

            return [
                ...state.slice(0, action.index),
                
                ...state.slice( action.index + 1)
            ];

            break;
        case "EDIT_SAVE":
            console.log("EDIT_SAVE");
            return action.payload;
            break;
        case "EDIT_CANCEL":
             var noteEdit = action.payload
            console.log(noteEdit);
            noteEdit.EditMode = false;
            console.log(noteEdit);
            
            return [
                ...state.slice(0, action.index),
                noteEdit,
                ...state.slice( action.index + 1)
            ];

        default:
            return state;
    }
}

export default notes;