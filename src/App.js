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

const user = {
    mail: localStorage.setItem('mail', "juan@gmail.com"),
    password: localStorage.setItem('pw', "prueba")
};

const myData = {
    mail : localStorage.getItem('mail'),
    password : localStorage.getItem("pw")
}


const LoginView = () => (
    <Login password={myData.password}  mail={myData.mail} /> 
);

const TodoAppView = () => (
    <TodoApp/> 
);


class App extends Component {

    constructor(props){
        super(props)
        this.state = {isLoogedIn : false}
        this.handleIslooged = this.handleIslooged.bind(this)
    }


    render() {
        console.log(localStorage.getItem('isLoogedIn') + " llegando")
        console.log(this.state.isLoogedIn)
        return (
            <Router>
                <Card className="App" onSubmit={this.handleIslooged} >
                    <CardMedia className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </CardMedia>
                    <br/>
                    <br/>
                    <CardContent>
                        <ul>
                            <li><Link to="/">Login</Link></li> 
                            <li><Link to="/todo">Todo</Link></li> 
                        </ul>

                        <div>
                            <h1> { this.state.isLoogedIn ? "you already logged in" : "login please" } </h1>                           
                            { this.state.isLoogedIn &&
                                <Route path="/todo" component={TodoAppView} /> 
                            }   
                            <Route exact path="/" component={LoginView} />
                        </div>
                    </CardContent>
                </Card>
            </Router>
        );
    }

    handleIslooged (e) {

        e.preventDefault();

        if( localStorage.getItem("isLoogedIn") == "true" ){
            this.setState({
                isLoogedIn : true
            });
        }else{
            this.setState({
                isLoogedIn : false
            });
        } 
    }
}

export default App;


