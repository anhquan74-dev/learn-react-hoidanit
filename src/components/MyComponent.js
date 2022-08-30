import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "anh quan",
        city: "Da Nang",
        age: 24,
    };

    handleClick(e) {
        console.log(e, e.target)
        console.log(e.target.innerText)
    }

    handleMouseOver(e) {
        console.log(e.pageX)
    }

    render() {
        return (<div>
            My name is {this.state.name} and I'm from {this.state.city}
            <br />
            <button onClick={this.handleClick}>Click me</button>
            <button onMouseOver={this.handleMouseOver}>Hover me</button>
        </div>);
    }
}

export default MyComponent;
