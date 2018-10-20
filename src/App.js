import React, { Component } from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <BrowserRouter>
                    <div>
                    <Header />
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/detail/:id' component={Detail}></Route>
                        <Route exact path='/write' component={Write}></Route>
                        <Route exact path='/login' component={Login}></Route>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
  }
}

export default App;
