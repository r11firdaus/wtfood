import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory()
    const chkUser = e => {
        const email = document.querySelectorAll('#email')
        const password = document.querySelectorAll('#password')
        console.log(password.value)
        e.preventDefault()
        // if (email.value === 'a@gmail.com' && password.value === 'a1234') {
        history.push('/')
        // }
        document.title = 'Register'
    }
    return (
        <div className="container" style={{ marginTop: '70px', }}>
            <h2 className="title" style={{ textAlign: 'center', padding: '20px' }}>Register Page</h2>
            <div className="card" style={{ margin: '40px auto', maxWidth: '550px', padding: '20px' }}>
                <h5 className="card-title" style={{ padding: '10px 20px' }}>Create account for more feature</h5>
                <div className="card-body">
                    <form className="d-flex">
                        <input type="email" className="form-control mr-2" id="email" placeholder="Email"></input>
                        <input type="password" value='' className="form-control mr-2" id="password" placeholder="Password"></input>
                        <button className="btn btn-primary" type="submit" onClick={e => chkUser(e)}>Register</button>
                    </form>
                    <p className="card-text" style={{ marginTop: '20px', textAlign: 'center' }}>Already have an account ? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}



export default Register
