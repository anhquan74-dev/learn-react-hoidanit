import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

// stateless vs stateful
// class DisplayInfor extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         isShowListUsers: true,
//     //     };
//     //     console.log('>> 1. call me constructor()')
//     // }

//     // componentDidMount() {
//     //     console.log('>> call me componentDidMount()')
//     //     setTimeout(() => { document.title = 'anhquan' }, 3000)
//     // }

//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log('>> call me componentDidUpdate()', this.props, prevProps)
//     //     if (this.props.listUsers !== prevProps.listUsers) {
//     //         if (this.props.listUsers.length === 5) {
//     //             alert('You got 5 users')
//     //         }
//     //     }

//     // }

//     // handleOnclickShowHideUsers = () => {
//     //     this.setState({
//     //         isShowListUsers: !this.state.isShowListUsers,
//     //     });
//     // };

//     render() {
//         //console.log('>> call me render()')

//         // console.log(this.props);
//         const { listUsers } = this.props;

//         return (
//             <div className="display-infor-container">
//                 <img src={logo} alt="logo" />
//                 <br />
//                 List Users:
//                 {/* <span onClick={this.handleOnclickShowHideUsers}>
//                     {this.state.isShowListUsers === true
//                         ? "Hide List Users"
//                         : "Show List Users"}
//                 </span> */}
//                 {true && (
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <>
//                                     <div className="user-item">
//                                         <div
//                                             key={user.id}
//                                             className={`user-item-content ${user.age > 18 ? "green" : "red"
//                                                 }`}
//                                         >
//                                             <h4>My name is {user.name}</h4>
//                                             <h4>I'm {user.age}</h4>
//                                         </div>
//                                         <span
//                                             className="delete-btn"
//                                             onClick={() => this.props.handleDeleteUser(user.id)}
//                                         >
//                                             X
//                                         </span>
//                                     </div>
//                                     <hr />
//                                 </>
//                             );
//                         })}
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    console.log(props)
    const {listUsers}  = props; //object
    console.log(listUsers)
    return (
        <div className="display-infor-container">
            <img src={logo} alt="logo" />
            <br />
            List Users:
            {true && (
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <>
                                <div className="user-item">
                                    <div
                                        key={user.id}
                                        className={`user-item-content ${user.age > 18 ? "green" : "red"
                                            }`}
                                    >
                                        <h4>My name is {user.name}</h4>
                                        <h4>I'm {user.age}</h4>
                                    </div>
                                    <span
                                        className="delete-btn"
                                        onClick={() => props.handleDeleteUser(user.id)}
                                    >
                                        X
                                    </span>
                                </div>
                                <hr />
                            </>
                        );
                    })}
                </>
            )}
        </div>
    );
}
export default DisplayInfor;
