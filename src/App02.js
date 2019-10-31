import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import store from './storeone'
//import {CHANGE_VALUE,ADD_TEXT,DEL_TEXT} from './storeone/actionTypes.js'
import {changeInputAction,AddText,DelText} from './storeone/actionCreat.js'
const Item = List.Item;
class App02 extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = store.getState();
        store.subscribe(this.storeChange);
    }
    render() { 
        return ( <div style={{'padding':'10px'}}>
                <WingBlank>
                    <InputItem placeholder={this.state.textValue} onChange={(e)=>this.changeInput(e)}></InputItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={()=>this.addText()}>按钮</Button>
                    <WhiteSpace></WhiteSpace>
                    <List className="my-list">
                        {this.state.textArr.map((item,i)=><Item key={i} onClick={()=>this.delItem(i)}>{item}</Item>)}
                    </List>
                </WingBlank>
        </div> );
    }
    changeInput=(e)=>{
        console.log(e)
        // const action = {
        //     type:CHANGE_VALUE,
        //     value:e
        // }
        const action = changeInputAction(e)
        store.dispatch(action);
    }
    addText=()=>{
        console.log('123')
        // const action = {
        //     type:ADD_TEXT,
        // }
        const action = AddText()
        store.dispatch(action)

    }
    delItem=(index)=>{
        console.log(index)
        // const action = {
        //     type:DEL_TEXT,
        //     index
        // }
        const action = DelText(index)
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState())
    }
    
}
 
export default App02;