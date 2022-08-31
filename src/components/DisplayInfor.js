import React from "react";
import './DisplayInfor.scss'
import logo from '../logo.svg'
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
            <div className="display-infor-container">
                <img src={logo} alt="logo" /><br />
                List Users:
                <span onClick={this.handleOnclickShowHideUsers}>
                    {this.state.isShowListUsers === true ? 'Hide List Users' : 'Show List Users'}
                </span>

                {this.state.isShowListUsers &&
                    (<>
                        {
                            listUsers.map((user, index) => {
                                return (
                                    <>
                                        <div className="user-item">
                                            <div key={user.id} className={`user-item-content ${(user.age > 18 ? 'green' : 'red')}`}>
                                                <h4>My name is {user.name}</h4>
                                                <h4>I'm {user.age}</h4>
                                            </div>
                                            <span className="delete-btn" onClick={() => this.props.handleDeleteUser(user.id)}>X</span>
                                        </div>
                                        <hr />
                                    </>
                                )
                            })
                        }
                    </>)
                }
            </div>
        )
    }
}

export default DisplayInfor;