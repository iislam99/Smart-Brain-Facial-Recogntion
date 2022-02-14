import React, { Component } from "react";
import Item from "./Item";

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        fetch('https://rocky-island-07169.herokuapp.com/leaderboard', {
            method: 'get',
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ data: data.list })
        })
        .catch(err => console.log(err));
    }

    render() {        
        return (
            <div className="br3 ba b--black-10 mv4 w-100 mw5 shadow-5 center">
                <ul className="item-wrapper list p10" >
                    <li className="b">Leaderboard</li>
                    <li className="item b">
                        <span className="tl">Name</span>
                        <span className="tr">Entries</span>
                    </li>
                    {this.state.data.map(user => {
                        return (<Item row={user} />)
                    })}
                </ul>                
            </div>
        );
    }
}

export default Leaderboard;