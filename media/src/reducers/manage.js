const initialState = "sahil";
const changeTheNumber = (state= initialState, action)=>{
    switch (action.type){
        case "INCREMENT": return "rajan";
        case "DECREMENT": return "sahil";
        default: return state;
    }
}
export default changeTheNumber;