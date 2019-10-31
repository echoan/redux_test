//将App06封装成一个无状态组件
import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import {connect} from 'react-redux'
const Item = List.Item
const App07 = (props)=>{
    let {textValue,textArr,inputChange,addList,delList} = props;
        return (
            <div style={{'padding':'10px'}}>
                <WingBlank>
                    <InputItem placeholder={textValue} onChange={(e)=>inputChange(e)}></InputItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={()=>addList()}>按钮</Button>
                    <WhiteSpace></WhiteSpace>
                    <List className="my-list">
                        {textArr.map((item,i)=><Item key={i} onClick={()=>delList(i)}>{item}</Item>)}
                    </List>
                </WingBlank>
            </div>
        )
}
 
const stateToProps = (state)=>{
    return {
        textValue : state.textValue,
        textArr : state.textArr
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            console.log(e)
            const action = {
                type:'changeValue',
                value:e
            }
            dispatch(action)
        },
        addList(){
            console.log('haha')
            const action = {
                type:'add'
            }
            dispatch(action)
        },
        delList(index){
            console.log(index)
            const action = {
                type:'del',
                index
            }
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps,dispatchToProps)(App07);