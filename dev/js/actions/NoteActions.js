export const addNote = () => {
    return {
        type: 'NOTE_ADD'
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
