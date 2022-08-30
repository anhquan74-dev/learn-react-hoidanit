import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "anh quan",
        city: "Da Nang",
        age: 24,
    };

    handleOnChangeInput(e) {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    handleOnChangeAge(e) {
        console.log(e.target.value)
        this.setState({
            age: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <br />
                <form onSubmit={(e) => this.handleSubmit(e)}>

                    <label htmlFor="">Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(e) => this.handleOnChangeInput(e)}
                    />

                    <br />

                    <label htmlFor="">Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(e) => this.handleOnChangeAge(e)}
                    />

                    <br />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default UserInfor