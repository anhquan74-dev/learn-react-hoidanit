import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
import { useEffect } from "react";


const DisplayInfor = (props) => {
    const { listUsers } = props; //object
    const [toggle, setToggle] = useState(true);


    // 
    // useEffect(() => {
    //     setTimeout(() => {
    //         document.title = 'test'
    //     }, 3000)
    //     console.log('>>> call me useEffect()')
    // });

    // componentDidMount
    // useEffect(() => {
    //     // setTimeout(()=>{
    //     //     document.title = 'test'
    //     // },3000)
    //     console.log('>>> call me useEffect()')
    // }, []);

    // componentDidUpdate
    useEffect(() => {
        // setTimeout(()=>{
        //     document.title = 'test'
        // },3000)
        if (listUsers.length === 0) {
            alert('Ban da xoa het users')
        }
        console.log('>>> call me useEffect()')
    }, [listUsers]);

    console.log('>>> call me render()')

    return (
        <div className="display-infor-container">
            <img src={logo} alt="logo" />
            <br />
            List Users:
            <span onClick={() => setToggle(!toggle)}> {toggle ? 'Hide' : 'Show'} List Users</span>
            {toggle && (
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
