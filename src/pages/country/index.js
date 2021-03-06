import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../component/spinner';
import getData from '../../config/api';

const Country = () => {
    const dispatch = useDispatch();
    const spinner = useSelector(state => state.spinner);
    const meal = useSelector(state => state.meal);
    document.title = 'Country'

    const getAPI = () => {
        getData('list', 'a', 'list').then(response => {
            if (response) dispatch({ type: 'LOAD_API', value: response })
            dispatch({ type: 'CHANGE_SPINNER', value: false })
        })
            .catch(err => console.error('Error:', err));
    }

    const showElement = () => {
        if (spinner) return Spinner();
        else {
            return (
                <ul className="list-group mx-5" style={{ marginTop: '30px' }}>
                    {
                        meal.map((meals, index) => (
                                <Link className="list-group-item" to={`/result/country/${meals.strArea}`} key={index}>{meals.strArea}</Link>
                            )
                        )
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
            <div style={{ marginTop: '70px' }}>
                <h4 className="mx-5">Country</h4>
                {showElement()}
            </div>
        </div>
    )
}

export default Country;