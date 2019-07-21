import React from "react";
import { Button, Divider, Input, Segment, Label } from "semantic-ui-react";
import './App.css'


class Home extends React.Component {
    state = {
        credentials: "",
        users: "",
        status: "",
        loggedIn: false
    };


    componentDidMount() {

    }

    render() {
        return (

            <div className="home">
                <Segment basic textAlign='center'>

                    <h1>You are logged In!!</h1>

                </Segment>
            </div>

        );
    }
}

export default Home;
