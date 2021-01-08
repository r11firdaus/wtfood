import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
    
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const dispatch = useDispatch();
    const useremail = localStorage.getItem('useremail');
    document.title = 'Login'

    useEffect(() => {
        if(useremail) history.push('/')
    }, [])
    
    const onChangeEmail = e => {
        const valEmail = e.target.value
        setemail(valEmail)
    }
    const onChangePassword = e => {
        const valPassword = e.target.value
        setpassword(valPassword)
    }
    const chkUser = e => {
        console.log(email, password)
        e.preventDefault()
        if (email == 'a@gmail.com' && password == 'a1234') {
            dispatch({type: 'CHANGE_ISLOGIN', value: true})
            localStorage.setItem('useremail', email)
            history.push('/')
        } else {
            console.log('salah anjing')
        }
    }
    return (
        <div className="container" style={{marginTop: '70px',}}>
            <h2 className="title" style={{ textAlign: 'center',padding: '20px'}}>Login Page</h2>
            <div className="card"style={{margin: '40px auto', maxWidth: '550px', padding: '20px'}}>
                <h5 className="card-title" style={{padding: '10px 20px'}}>Login for more feature</h5>
                <div className="card-body">
                <form className="d-flex">
                    <input type="email" required onChange={onChangeEmail} value={email} className="form-control mr-2" id="email" placeholder="Email"></input>
                    <input type="password" required onChange={onChangePassword} value={password} className="form-control mr-2" id="password" placeholder="Password"></input>
                    <button className="btn btn-primary" type="submit" onClick={e => chkUser(e)}>Login</button>
                </form>
                    <p className="card-text" style={{marginTop: '20px', textAlign: 'center'}}>Don't have an account ? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
