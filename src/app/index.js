import React from 'react';
import { render } from 'react-dom'
import {User} from './user/user';
export class App extends React.Component {
    render() {
        return (
            <div>
                <User/>
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'));