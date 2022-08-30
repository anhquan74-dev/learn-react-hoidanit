import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "anh quan",
        city: "Da Nang",
        age: 24,
    };

    handleClick(e) {
        // console.log(e, e.target)
        console.log(e.target.innerText)
        console.log("Random: " + Math.floor((Math.random() * 100) + 1))
        //merge stage
        this.setState({
            // ...this.state,
            name: 'ANH QUAN',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleMouseOver(e) {
        console.log(e.pageX)
    }

    handleOnChange(e) {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (<div>
            My name is {this.state.name} and I'm {this.state.age}
            <br />
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    type="text"
                    onChange={(e) => this.handleOnChange(e)}
                />
                <button>Submit</button>
            </form>
        </div>);
    }
}

export default MyComponent;
