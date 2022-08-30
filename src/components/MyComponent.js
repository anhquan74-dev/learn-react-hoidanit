import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {
                id: 1,
                name: "Tran Anh Quan",
                age: 24
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
    render() {
        return (
            <>
                <UserInfor />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </>
        );
    }
}

export default MyComponent;
