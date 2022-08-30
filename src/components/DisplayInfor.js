import React from "react";

class DisplayInfor extends React.Component {
    render( ) {
        console.log(this.props)
        return (
            <div>
                <h1>My name is {this.props.name}</h1>
                <h1>I'm {this.props.age}</h1>
                <h2>I'm learning {this.props.myInfo}</h2>
            </div>
        )
    }
}

export default DisplayInfor;