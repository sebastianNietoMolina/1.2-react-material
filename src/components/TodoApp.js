import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';  
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";


  
export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        return (
            <Card className="TodoApp">
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    
                    <TextField
                        id="text"
                        label = "Text"
                        type = "text"
                        required
                        multiline
                        variant="outlined"
                        onChange={this.handleTextChange}
                        value={this.state.text}> 
                        onChange={this.handleDateChange}
                        className="right-margin"
                    </TextField>
                    
                    <br/>
                    <br/>

                    <TextField
                        id="priority"
                        label = "Priority"
                        type = "number"
                        required
                        variant="outlined"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}> 
                        onChange={this.handleDateChange}
                        className="right-margin"
                    </TextField>

                    <br/>
                    <br/>

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>

                    <br/>
                    <br/>
                    
                    <Button type="submit" variant="contained" color="primary" fullWidth >
                        Add #{this.state.items.length + 1}  
                    </Button>
                    
                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </Card>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: 'text',
            priority: '0',
            dueDate: ''
        }));
    }

}

