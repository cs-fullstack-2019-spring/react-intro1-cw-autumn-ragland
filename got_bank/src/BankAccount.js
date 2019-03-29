import React, { Component } from 'react';

class BankAccount extends Component {
    render() {
        return (
            <div>
                {/*render props passed in app.js*/}
                <h2> Welcome {this.props.customerName}</h2>
                <h3>You account balance is ${this.props.balance}</h3>
            </div>
        );
    }
}

export default BankAccount;
