import * as React from 'react';
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export interface HelloProps { id: string }

export const App = (props: HelloProps) => {
    return (
    <div id={props.id}>
        <div>Todo </div>
        <TodoInput value="" />
        <TodoList />
    </div>)
}