import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
//import { Input } from 'antd'
import store from './store'
const Item = List.Item;
// const textdata = ['01 Multiple line，long text will wrap Multiple line，long text will wrap','02 Multiple line，long text will wrap']
class App01 extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = store.getState();
        //this.changeInputValue= this.changeInputValue.bind(this)
        store.subscribe(this.storeChange)
    }
    render() { 
        return ( <div style={{'padding':'10px'}}>
                <WingBlank>
                    {/* <Input placeholder={this.state.defaultValue} onChange={this.changeInputValue}></Input> */}
                    <InputItem placeholder={this.state.defaultValue} onChange={(e)=>this.changeInputValue(e)}></InputItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary">按钮</Button>
                    <WhiteSpace></WhiteSpace>
                    <List className="my-list">
                        {this.state.textdata.map((item,i)=>{return <Item wrap key={i}>{item}</Item>})}
                        {/* <Item wrap>Multiple line，long text will wrap</Item> */}
                        
                    </List>
                </WingBlank>
        </div> );
    }
   changeInputValue=(e)=>{
        console.log(e)
        const action = {
            type:"changeInput",
            value:e
        }
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState());
    }
}
 
export default App01;