import React, { Component } from 'react';
import App04 from './App04'
import store from './storeone'
import {changeInputAction,AddText,DelText,getListData} from './storeone/actionCreat.js'

import axios from 'axios'

class App03 extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = store.getState();
        store.subscribe(this.storeChange);
    }
    render() { 
        return ( <div>
            <App04 textValue={this.state.textValue} textArr={this.state.textArr} changeInput={this.changeInput} addText={this.addText} delItem={this.delItem}></App04>   
        </div>);
    }
    componentDidMount(){
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
            store.dispatch(action)
        })
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
        //     console.log(res.data)
        // })
    }
    changeInput=(e)=>{
        console.log(e)
        const action = changeInputAction(e)
        store.dispatch(action);
    }
    addText=()=>{
        console.log('123')
        const action = AddText()
        store.dispatch(action)

    }
    delItem=(index)=>{
        console.log(index)
        const action = DelText(index)
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState())
    }
    
}
 
export default App03;