import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
const Item = List.Item;
class App04 extends Component {
    render() {
        return (
            <div style={{'padding':'10px'}}>
                <WingBlank>
                    <InputItem placeholder={this.props.textValue} onChange={(e)=>this.props.changeInput(e)}></InputItem>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={()=>this.props.addText()}>按钮</Button>
                    <WhiteSpace></WhiteSpace>
                    <List className="my-list">
                        {this.props.textArr.map((item,i)=><Item key={i} onClick={()=>this.props.delItem(i)}>{item.series_name}</Item>)}
                    </List>
                </WingBlank>
            </div>
        );
    }
}
export default App04;