import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "anh quan",
        city: "Da Nang",
        age: 24,
    };

    handleClick(e){
        // console.log(e, e.target)
        console.log(e.target.innerText) 
        console.log("Random: " + Math.floor((Math.random()*100) + 1))
        //merge stage
        this.setState({
            // ...this.state,
            name: 'ANH QUAN',
            age: Math.floor((Math.random()*100) + 1)
        })
    }

    handleMouseOver(e) {
        console.log(e.pageX)
    }

    render() {
        return (<div>
            My name is {this.state.name} and I'm {this.state.age}
            <br />
            <button onMouseOver={this.handleMouseOver}>Hover me</button>
            <button onClick={(e) => this.handleClick(e)}>Click me</button>
        </div>);
    }
}

export default MyComponent;
