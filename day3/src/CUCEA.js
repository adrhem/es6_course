import React from 'react';

export default class CUCEA extends React.Component {
    static style = {
        position: 'absolute',
        width: 50,
        height: 25,
        left: -20 / 2,
        top: -20 / 2,
        borderRadius: 2,
        backgroundColor: '#673ab7',
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        padding: 6,
    };

    render() {
        return (
            <div style={CUCEA.style}>
                {this.props.text}
            </div>
        );
    }
}