import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';


export class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {meail : '', password : ''}
        this.mail = this.props.mail
        this.pw = this.props.password
        this.handleLog = this.handleLog.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleMail = this.handleMail.bind(this)
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={this.handleLog} >
                            <FormControl margin="normal" required fullWidth onChange={this.handleMail}>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth onChange={this.handlePassword}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"

                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleMail(e) {
        this.setState({
            meail : e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleLog() {
        if(this.state.meail!==this.mail || this.state.password!==this.pw ){
            alert("User or password incorrect")
            localStorage.setItem('isLoogedIn', false)
        }else{
            localStorage.setItem('isLoogedIn', true)
        }
        console.log(localStorage.getItem('isLoogedIn') + "  que cambio")
        return localStorage.getItem("isLoogedIn")
    }

}