import React from 'react'
import { Form, Button, Row} from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";
import Cookies from "universal-cookie";





export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    //const [login, setLogin] = useState(false);

    const cookies = new Cookies();

    const configuration = {
        method: "post",
        url: "https://teeawe-chatbot-auth-backend-4e7281a2b796.herokuapp.com/login",
        data: {
          email,
          password,
        },
      };

    

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make the API call
        axios(configuration)
        .then((result) => {
        setLogin(true);

        // set the cookie
        cookies.set("TOKEN", result.data.token, {
            path: "/",
            });

        // redirect user to the auth page
        //window.location.href = "/";
        })
        .catch((error) => {
        error = new Error();
        console.log(error);
        console.log("login unsuccess");
        });
      }

  
    return (
        <div className="w-50">
          <h2>Login</h2>
            <div>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                    {/* email */}
                    <Row className="mb-3">
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                        </Form.Group>
                    </Row>
                    

                    {/* password */}
                    <Row className="mb-3">
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        </Form.Group>
                    </Row>
                    

                    {/* submit button */}
                    <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                    >
                    Login
                    </Button><a href="/register">Not have a accout?</a>

                    {/* display success message */}
                    {login ? (
                    <p className="text-success">You Are Logged in Successfully</p>
                    ) : (
                    <p className="text-danger">You Are Not Logged in</p>
                    )}              
                </Form>
            </div>


            
        </div>
    )
}
