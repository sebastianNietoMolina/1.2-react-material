import React from 'react';
import {Todo} from './Todo'
import Card from '@material-ui/core/Card';  
import CardContent from '@material-ui/core/CardContent';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
            <Card>
                <CardContent>
                    <table>
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Due Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todoList}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        );


    }

}