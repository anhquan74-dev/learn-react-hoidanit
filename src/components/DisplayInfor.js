import React from "react";

class DisplayInfor extends React.Component {
    render() {
        console.log(this.props)
        const { listUsers } = this.props
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <h1>My name is {user.name}</h1>
                            <h1>I'm {user.age}</h1>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfor;