import React, { Component } from 'react';
import App07 from './App07'

import { Provider } from 'react-redux'
import store from './storetwo'
class App05 extends Component {
    render() { 
        return ( <div>
            <Provider store={store}>
                <App07></App07>
            </Provider> 
        </div>);
    }
    
}
 
export default App05;