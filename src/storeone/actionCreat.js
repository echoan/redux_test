import {CHANGE_VALUE,ADD_TEXT,DEL_TEXT,GET_LIST} from './actionTypes.js'
export const changeInputAction = (value)=>({
    type:CHANGE_VALUE,
    value
})
export const AddText = ()=>({
    type:ADD_TEXT
})
export const DelText = (index)=>({
    type:DEL_TEXT,
    index
})
export const getListData = (data)=>({
    type:GET_LIST,
    data
})
