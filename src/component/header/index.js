import React, { useState } from 'react';
import './header.css';
import { actionChangeLoading } from '../../config/redux/action';
import Button from '../button';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.css'

const Header = () => {
    const loading = useSelector(state => state.loading)
    const history = useHistory()
    const [data, setdata] = useState('')
    // const useremail = localStorage.getItem('useremail')
    // const isLogin = useSelector(state => state.isLogin)
    // const dispatch = useDispatch()
    const changeUser = e => {
        // e.preventDefault()
        actionChangeLoading();
        history.push(`/result/meal/${data}`)
        actionChangeLoading();
    }
    const onChangeData = e => {
        const typedata = e.target.value;
        setdata(typedata)
    }
    // const handleLogout = () => {
    //     localStorage.removeItem('useremail')
    //     history.push('/login')
    // }
    // const showLoginBtn = () => {
    //     if (isLogin) return <a className="btn btn-sm btn-light" onClick={handleLogout}>Logout</a>;
    //        return <Link className="btn btn-sm btn-outline-primary" to="/login" tabIndex="-1">Login</Link>;
    // }

    // useEffect(() => {
        // useremail ? dispatch({type: 'CHANGE_ISLOGIN', value: true}) : dispatch({type: 'CHANGE_ISLOGIN', value: false})
    // }, [])

    return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
                    <div className="container-fluid" style={{display: 'flex'}}>
                        <div style={{flex: '1'}}>
                            <Link className="navbar-brand" to="/">What The Food</Link>
                        </div>
                        <form className="d-flex mr-auto" style={{flex: '2'}}>
                            <input className="form-control mr-2 searchbox" value={data} onChange={onChangeData} id='type-name' type="search" placeholder="Search" aria-label="Search" style={{maxWidth: '400px'}} />
                            <Button className="btn btn-primary pencarian" onClick={changeUser} type="submit" name="Submit" loading={loading} />
                        </form>
                        <ul className="navbar-nav ml-auto mx-auto navigasi">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item ml-3">
                                <Link className="nav-link" to="/category">Category</Link>
                            </li>
                            <li className="nav-item ml-3">
                                <Link className="nav-link" to="/country">Country</Link>
                            </li>
                            <li className="nav-item ml-3">
                                <Link className="nav-link" to="/foodlist">Food List</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav" style={{right: '0'}}>
                            {/* <li className="nav-item">
                                {showLoginBtn()}
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </header>
    )
}


export default Header;