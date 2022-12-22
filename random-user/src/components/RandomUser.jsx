import React, { useState } from 'react'

let inputData = [
    {
        id: 1,
        name: "Bùi Hiên",
        email: "hien@gmail.com",
        address: "Thái Bình",
    },
    {
        id: 2,
        name: "Thu Hằng",
        email: "hang@gmail.com",
        address: "Hải Dương",
    },
    {
        id: 3,
        name: "Minh Duy",
        email: "duy@gmail.com",
        address: "Hưng Yên",
    },
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomUser() {
    let defaultVal = inputData[getRandomInt(0, inputData.length-1)];

    const [name, setName] = useState(defaultVal.name);
    const [email, setEmail] = useState(defaultVal.email);
    const [address, setAddress] = useState(defaultVal.address);
    const [data, setData] = useState(inputData);
    const [hideOption, setHideOption] = useState("");
    const [hideMessage, setHideMessage] = useState("none");

    const onRandomList = () => {
        let randomVal = data[getRandomInt(0, data.length-1)];
        setName(randomVal.name);
        setEmail(randomVal.email);
        setAddress(randomVal.address);
    };

    const onRemoveList = () => {
        const newData =[...data];
        if (newData.length > 0) {
            newData.pop();
        }
        if (!newData.length) {
            setHideOption("none");
            setHideMessage("");
        }
        setData(newData);
    };

    return (
        <>  
            <h1 style={{display: hideMessage, color:"red"}}>Không còn user nào trong danh sách</h1>
            <p style={{display: hideOption}}>
                <h1 style={{color:"red"}}>{name}</h1>
                <ul id="userInfor">
                    <li key="email">{email}</li>
                    <li key="address">{address}</li>
                </ul>

                <button onClick={onRandomList}>Random User</button>
                <button onClick={onRemoveList}>Delete User</button>
            </p>
        </>
    )
}

export default RandomUser