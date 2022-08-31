import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUsers: true
    }

    handleOnclickShowHideUsers = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }

    render() {
        console.log(this.props)
        const { listUsers } = this.props

        return (
            <div>
                List Users: <span onClick={this.handleOnclickShowHideUsers}>
                    {this.state.isShowListUsers === true ? 'Hide List Users' : 'Show List Users'}
                </span>
                {this.state.isShowListUsers &&
                    (<div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? 'green' : 'red'}>
                                    <h1>My name is {user.name}</h1>
                                    <h1>I'm {user.age}</h1>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>)
                }
            </div>
        )
    }
}

export default DisplayInfor;