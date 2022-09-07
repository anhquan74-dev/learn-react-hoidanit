import React from "react";
import { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "anh quan",
//         city: "Da Nang",
//         age: 24,
//     };

//     handleOnChangeInput(e) {
//         console.log(e.target.value)
//         setState({
//             name: e.target.value
//         })
//     }

//     handleOnChangeAge(e) {
//         console.log(e.target.value)
//         setState({
//             age: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1),
//             name: name,
//             age: age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 My name is {name} and I'm {age}
//                 <br />
//                 <form onSubmit={(e) => handleSubmit(e)}>

//                     <label htmlFor="">Your name: </label>
//                     <input
//                         value={name}
//                         type="text"
//                         onChange={(e) => handleOnChangeInput(e)}
//                     />

//                     <br />

//                     <label htmlFor="">Your age: </label>
//                     <input
//                         value={age}
//                         type="text"
//                         onChange={(e) => handleOnChangeAge(e)}
//                     />

//                     <br />
//                     <button>Submit</button>

//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {

    const [name, setName] = useState("anh quan")
    const [city, setCity] = useState("Da Nang")
    const [age, setAge] = useState(24)

    const handleOnChangeInput = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleOnChangeAge = (e) => {
        console.log(e.target.value)
        setAge(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1),
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name} and I'm {age}
            <br />
            <form onSubmit={(e) => handleSubmit(e)}>

                <label htmlFor="">Your name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(e) => handleOnChangeInput(e)}
                />

                <br />

                <label htmlFor="">Your age: </label>
                <input
                    value={age}
                    type="text"
                    onChange={(e) => handleOnChangeAge(e)}
                />

                <br />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default AddUserInfor