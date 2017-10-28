import * as React from 'react'

export interface TodoInputProps { value: string }
interface TodoInputState { value: string }

export class TodoInput extends React.Component<TodoInputProps, TodoInputState>{

    constructor(props: TodoInputProps) {
        super(props);
        this.state = { value: '' };

    }

    render() {
        return (
            <div>
                <input type="text"
                    placeholder="Type in your todo"
                    value={this.state.value}
                    onChange={this.onInputChange.bind(this)}></input>
                <button>Submit !</button>
            </div>
        )
    }

    onInputChange(event: Event) {
        // The following line of code can't work because the ts cast
        // feature conflicts against react jsx.
        // read http://slidedeck.io/thewazir/Using-Typescript-with-JSX
        //var input = <HTMLInputElement>event.target

        var input = event.target as HTMLInputElement

        this.setState({ value: input.value });
    }
}

