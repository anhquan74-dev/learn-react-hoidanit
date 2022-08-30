import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    render() {
        const myInfo = ['js', 'react', 'node']
        return (
            <>
                <UserInfor />
                <br />
                <DisplayInfor age="24" name="anhquan" />
                <hr />
                <DisplayInfor age={25} name="trananhquan" myInfo={myInfo}/>
            </>
        );
    }
}

export default MyComponent;
