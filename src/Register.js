import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";



export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [setRegister] = useState(false);
    const [register,setRegister] = useState(false);


    // set configurations
    const configuration = {
        method: "post",
        url: "https://teeawe-chatbot-auth-backend-4e7281a2b796.herokuapp.com/register",
        data: {
          email,
          password,
        },
      };

    
    const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    //ifClick(true);
    // make the API call
    axios(configuration)
    .then((result) => {
      setRegister(true);
      console.log("register success");
    })
    .catch((error) => {
      error = new Error();
      //register(true);
      console.log("register unsuccess");
      alert ("Email has been registered")
    });

    }

    return (
        <div className="w-50">
            <h2>Register</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                {/* email */}
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

                {/* password */}
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

                {/* submit button */}
                <Button
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                >
                Register
                </Button>

                {/* display success message */}
                {register ? (
                <p className="text-success">Successfully</p>
                ) : (
                <p className="text-danger">Please Register</p>
                )}

               


            </Form>  
        </div>
    )
}
