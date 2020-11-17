export const getNote = () => {
    return {
        type: "GET_NOTE"
    }
}

export const addNote = (note) => {
    return {
        type: "ADD_NOTE",
        note
    }
}

export const removeNote = (id) => {
    return {
        type: "REMOVE_NOTE",
        id
    }
}