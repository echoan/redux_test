const defaultState = {
    defaultValue:'write here',
    textdata:['01 Multiple line','02 Multiple line，long text will wrap']
};
export default (state = defaultState,action)=>{
    console.log(state,action)
    if(action.type === 'changeInput'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.defaultValue = action.value
        return newState;
    }
    return state;
}