const initialState = {
  hems: "Guru",
};

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case "change":
            return{
                hems: "Gururemainsconstant"
            }
        default:
            return state
    }
};

export default Reducer;
