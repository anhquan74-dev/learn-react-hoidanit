import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "anh quan",
        city: "Da Nang",
        age: 24,
    };
    render() {
        return <div> My name is {this.state.name} and I'm from {this.state.city}</div>;
    }
}

export default MyComponent;
