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
            noteEdit.EditMode = true;
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
            var noteSave = action.payload
            noteSave.EditMode = false;
            noteSave.Header = action.header;
            noteSave.Body = action.body;
            noteSave.Color = action.color;
            
            return [
                ...state.slice(0, action.index),
                noteSave,
                ...state.slice( action.index + 1)
            ];
            break;
        case "EDIT_CANCEL":
             var noteEdit = action.payload
            noteEdit.EditMode = false;            
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