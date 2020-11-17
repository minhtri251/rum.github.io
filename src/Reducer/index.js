let defaultState = {
    notes: [
        {id: 0, title: "ReactJS", detail: "học reactjs", recorded: "Sun Mar 11 2018 "},
        {id: 1, title: "HTML", detail: "học html", recorded: "Sun Mar 11 2018 "}
    ],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET_NOTE":
            return {...state}
        case "ADD_NOTE": 
            return {...state, notes: [...state.notes, action.note]}
        case "REMOVE_NOTE":
            return {...state, notes: [...state.notes.filter(x => x.id !== action.id)]}
        default:
            return state
    }
}
