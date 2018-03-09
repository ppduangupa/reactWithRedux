import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return _.map(this.props.users, (user, key) => {
            return (
                <li className="list-group-item" key={key}>
                    {user.user_name}
                    <span className="label label-default label-pill pull-xs-right">
                        {user.user_email}
                    </span>
                </li>
            )
        });
    }

    addUser() {
        this.props.createUsers();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <button onClick={this.addUser.bind(this)} className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </button>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps, actions)(App);
