import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"; 
import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Home = () => {
const [userInfo, setUserInfo] = useState([]);

useEffect(() => {
    axios
        .get(`https://reqres.in/api/users?per_page=9`)
        .then((res)=>{
            console.log(res.data.data);
            setUserInfo(res.data.data);
        })
        .catch((e)=>{
            console.log(e);
        });
}, []);

const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Box = styled.div`
    width:600px;
    display:flex;
    flex-wrap:wrap;
    text-align:center;
    justify-content:center;
`

    return (
        <>
            <Container>
                    <h1>Home Page</h1>
                <Box>
                    {userInfo.map((user,index) => (
                        <Card key={user.id} id={index} img={user.avatar} name={`${user.first_name} ${user.last_name}`}/>
                    ))}
                </Box>
            </Container>
        </>
        );
};

export default Home;

