const defaultValue = {
    textValue:'helloworld',
    textArr:['hello','world']
}
export default (state = defaultValue,action)=>{
    if(action.type === 'changeValue'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.textValue = action.value
        console.log(state,action)
        return newState
    }
    if(action.type === 'add'){
        const newState =JSON.parse(JSON.stringify(state))
        newState.textArr.push(newState.textValue)
        console.log(newState.textArr)
        return newState
    }
    if(action.type === 'del'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.textArr.splice(action.index,1)
        return newState
    }
    return state
}