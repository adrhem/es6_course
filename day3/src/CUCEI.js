import React from 'react';
import './CUCEI.css';

export default class CUCEI extends React.Component {
    static style = {
        position: 'absolute',
        width: 50,
        height: 25,
        left: -20 / 2,
        top: -20 / 2,
        borderRadius: 2,
        backgroundColor: '#03A9F4',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        padding: 6,
    };

    handleClick = () => {
        alert("We are the best!");
    };

    render() {
        return (
            <div className="cucei" onClick={this.handleClick} style={CUCEI.style}>
                {this.props.text}
            </div>
        );
    }
}