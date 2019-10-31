import axios from 'axios'
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
// export const getListData = (data)=>({
//     type:GET_LIST,
//     data
// })
const getListData = (data)=>({
    type:GET_LIST,
    data
})
export const getListDataOne = ()=>{
    return(dispatch)=>{
        axios.get("http://api.izhangchu.com/",{
            params:{
                methodName:"CourseIndex",
                version:4.4,
                user_id:0,
                page:1,
                size:10
            }
        }).then((res)=>{
            console.log(res.data.data.data)
            const data = res.data.data.data
            const action = getListData(data)
            dispatch(action)
        })
    }
}
