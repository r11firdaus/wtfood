import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../component/header";
import Headline from '../../component/headline';
import Main from '../../component/main';
import Spinner from "../../component/spinner";
import getData from "../../config/api";
import getCategory from "../../config/api";

const Home = () => {
    const state = useSelector(state => state.meal)
    const spinner = useSelector(state => state.spinner)
    const dispatch = useDispatch()
    document.title = 'What The Food'

    const showElement = () => {
        if (spinner) return Spinner();
        else {
            return (
                <div>
                    <Headline data={state} />
                    <Main />
                </div>
            )
        }
    }

    const getAPI = () => {
        getData('list', 'c', 'list').then(response => {
            if (response) {
                dispatch({ type: 'CHANGE_SPINNER', value: false })
                dispatch({ type: 'LOAD_API', value: response })
            }
        })
            .catch(err => console.error('Error:', err));

    }

    useEffect(() => {
        dispatch({ type: 'CHANGE_SPINNER', value: true })
        getAPI()
    }, [])

    return (
        <div style={{ height: '100%' }}>
            <Header />
            {showElement()}
        </div>
    )
}

export default Home;