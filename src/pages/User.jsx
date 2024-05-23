import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"; 
import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const User = () => {
    const [userInfo, setUserInfo] = useState({
        avatar: "",
        email: "",
        first_name: "",
        id: 0,
        last_name: "",
    });
    
    const {userId} = useParams()
    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${userId}`)
            .then((res)=>{
                console.log(res.data.data);
                setUserInfo(res.data.data);
            })
            .catch((e)=>{
                console.log(e);
            });
    }, [userId]);

    return(
        <>
            <h1>User Information</h1>
            <img src={userInfo.avatar}/>
            <h3>{`e-mail : ${userInfo.email}`}</h3>
        </>

    )
};

export default User;