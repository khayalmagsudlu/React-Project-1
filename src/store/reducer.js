const initalState={
    modalIsOpen:false,
    basket: JSON.parse(window.localStorage.getItem("basket")) || [],
    wish: JSON.parse(window.localStorage.getItem("wish")) || [],
    basketModal:false,
    wishModal:false,
};
export default function reducer(state=initalState,action){
    switch(action.type){
        case "SET_SEARCHMODAL":
            return {...state,modalIsOpen:action.payload};
        case "SET_BASKET":
        window.localStorage.setItem("basket",JSON.stringify([...action.payload]))
        return {...state,basket:[...action.payload]};
            case "SET_WISH":
                window.localStorage.setItem("wish",JSON.stringify([...action.payload]))
                return {...state,wish:[...action.payload]};
                case "SET_BASKETMODAL":
                    return {...state,basketModal:action.payload};
                    case "SET_WISHMODAL":
                        return {...state,wishModal:action.payload};
            default:return state;
    }
}