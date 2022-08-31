import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {
                id: 1,
                name: "Tran Anh Quan",
                age: 16
            },
            {
                id: 2,
                name: "anhquan74.dev",
                age: 22
            },
            {
                id: 3,
                name: "Anh Quan",
                age: 25
            }
        ]
    }

    handleAddNewUser = (user) => {
        this.setState({
            listUsers: [...this.state.listUsers, user]
        })
        console.log(user)
    }

    handleDeleteUser = (userId) => {
        this.setState({
            listUsers: this.state.listUsers.filter((user) => user.id !== userId)
        })
    }

    render() {
        return (
            <>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        );
    }
}

export default MyComponent;
