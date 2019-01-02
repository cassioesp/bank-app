export default (state, action) => {
    switch (action.type) {
        case "WITHDRAW":
            return {
                ...state,
                totalAmount: state.totalAmount - action.value
            };
        default:
            return state;
    }
}