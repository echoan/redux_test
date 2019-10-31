import {CHANGE_VALUE,ADD_TEXT,DEL_TEXT, GET_LIST} from './actionTypes.js'
const defaultValue = {
    textValue:'writehere',
    textArr:[{"series_name":'Tom'},{"series_name":'JACK'}]
};
export default (state = defaultValue,action)=>{
    console.log(state,action)
    if(action.type === CHANGE_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.textValue = action.value;
        console.log(state,action);
        return newState;
    }
    if(action.type === ADD_TEXT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.textArr.push({'series_name':newState.textValue});
        newState.textValue = '';
        return newState;
    }
    if(action.type === DEL_TEXT){
        const newState = JSON.parse(JSON.stringify(state));
        newState.textArr.splice(action.index,1)
        return newState;
    }
    if(action.type === GET_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.textArr = action.data
        return newState;
    }
    
    return state;
}