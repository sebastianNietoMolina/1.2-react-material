import React, {Component} from 'react';
import logo from './logo.svg';
import './components/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login';
import {TodoApp} from './components/TodoApp';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';  
import CardContent from '@material-ui/core/CardContent';

const LoginView = () => (
    <Login/>
);

const TodoAppView = () => (
    <TodoApp/>
);

class App extends Component {

    constructor(props){
        super(props)
        this.state = {isLoggedIn : false}
        this.handleLogChange = this.handleLogChange.bind(this);
    }
    render() {
        console.log(this.state)

        return (
            <Router>
                <Card className="App">
                    <CardMedia className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </CardMedia>
                    <br/>
                    <br/>
                    <CardContent>
                        <ul>
                            <li><Link to="/todo">Todo</Link></li> 
                            <li><Link to="/">Login</Link></li> 
                        </ul>

                        <div>
                            { this.state.isLoggedIn ?
                                <Route path="/todo" component={TodoAppView} /> :
                                <Route exact path="/" component={LoginView} />  
                            }                          
                        </div>
                    </CardContent>
                </Card>
            </Router>
        );
    }
    handleLogChange() {
        alert(this.state.isLoggedIn)
    }

}

export default App;
