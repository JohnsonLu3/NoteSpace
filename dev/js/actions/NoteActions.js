export const addNote = () => {
    var note = {
            id: 1,
            Header: "Lorem Ipsum",
            Body: "Spicy jalapeno bacon ipsum dolor amet swine prosciutto strip steak, pastrami fatback ribeye picanha salami. Picanha bresaola brisket salami pancetta ham hock. Prosciutto brisket pancetta short loin jerky cow picanha, meatball shankle. Ground round short ribs capicola beef ham hock sirloin turducken. Boudin turkey spare ribs flank capicola turducken shank biltong frankfurter cupim tongue. Hamburger short loin meatloaf frankfurter tri-tip, brisket shank chuck jowl flank tail buffalo porchetta kevin rump.",
            Color: "#b6e5e6",
            Font: "",
            FontColor: "",
            X: 0,
            Y: 0,
            EditMode : false
        };

    return {
        type: 'NOTE_ADD',
        payload: note
    }
};

export const editNote = (note) => {
    return {
        type: 'NOTE_EDIT',
        payload: note
    }
};

export const removeNote = (note) => {
    return {
        type: 'NOTE_REMOVE',
        payload: note
    }
};

export const saveEdit = (note) => {
    return {
        type: 'EDIT_SAVE',
        payload: note
    }
};

export const cancelEdit = (note) => {
    return {
        type: 'EDIT_CANCEL',
        payload: note
    }
};
