import React from 'react'
import logo from './logo.svg';
import './App.css';
import Casino from '../components'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: ['A','B','C']
        }
    }

    componentDidMount() {
        console.log('Component did mount')
        console.log(this.state.name)
        this.setState({
            name: 'Le tricheure'
        }, () => console.log('Callback : ', this.state.name))
        console.log(this.state.name)
    }

    render () {

    return (
        <div className="App">
            {
                this.state.users.map((user,i) => <p key={i}>{user}</p>)
            }
            <p>{this.state.name}</p>
            <Casino casinon={[{name: 'MonSuperCasino', url:'httplol'}, {nam: 'Moncasion', url: 'hpptcasino'}]}/>
        </div>
    );
  }
}

export default App;
