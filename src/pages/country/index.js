import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../component/header'
import Spinner from '../../component/spinner';
import getData from '../../config/api';

const Country = () => {
    const dispatch = useDispatch();
    const spinner = useSelector(state => state.spinner);
    const meal = useSelector(state => state.meal);
    document.title = 'Country'

    const getAPI = () => {
        getData('list', 'a', 'list').then(response => {
            if (response) {
                dispatch({ type: 'LOAD_API', value: response })
            }
            dispatch({ type: 'CHANGE_SPINNER', value: false })
        })
            .catch(err => console.error('Error:', err));
    }

    const showElement = () => {
        if (spinner) return Spinner();
        else {
            return (
                <ul class="list-group mx-5" style={{ marginTop: '30px' }}>
                    {
                        meal.map(meals => {
                            return (
                                <Link class="list-group-item" to={`/result/country/${meals.strArea}`}>{meals.strArea}</Link>
                            )
                        })
                    }
                </ul>
            )
        }
    }

    useEffect(() => {
        dispatch({ type: 'CHANGE_SPINNER', value: true })
        getAPI()
    }, [])

    return (
        <div>
            <Header />
            <div style={{ marginTop: '100px' }}>
                {/* <h1 className="mx-5">Country</h1> */}
                {showElement()}
            </div>
        </div>
    )
}

export default Country;