import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser({id, title, content}) {
        return (
            <li className="list-group-item" key={id}>
                {title}
                <span className="label label-default label-pill pull-xs-right">
                    {content}
                </span>
            </li>
        );
    }

    render() {
        const { users } = this.props;

        if(_.isEmpty(users)) {
            return <div>
                Loading...
            </div>;
        }

        return (
            <div>
                <h4>Posts</h4>
                <ul className="list-group">
                    {users.map(this.renderUser)}
                </ul>
            </div>

        );
    }
}

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps, actions)(App);
