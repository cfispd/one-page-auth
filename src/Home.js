import React from 'react'
import { Button } from "react-bootstrap";


export default function Login() {

    return (
        <div className="col text-center">
            <h2>Chat Robot</h2>
            <Button
                variant="primary"
                type="submit"
                size ="lg"
                href="/login"
                >
                Login
            </Button>{' '}
            <Button
                variant="primary"
                type="submit"
                size ="lg"
                href="/Register"
                >
                Sign up
            </Button>
            <p>Learn React</p>
        </div>
    )
}
