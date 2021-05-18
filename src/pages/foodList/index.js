import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../component/header';
import Spinner from '../../component/spinner';
import getData from '../../config/api';

export default function FoodList() {
    const dispatch = useDispatch();
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const spinner = useSelector(state => state.spinner)
    const [meal, setmeal] = useState([])
    document.title = 'List Meal By First Letter'

    const getAPI = huruf => {
        dispatch({ type: 'CHANGE_SPINNER', value: true })
        getData('search', 'f', huruf).then(response => {
            dispatch({ type: 'CHANGE_SPINNER', value: false })
            if (response) setmeal(response);
            else setmeal(null)
        })

    }

    const showList = () => {
        if (spinner) return Spinner();
        else if (meal) {
            return (
                <ul className="list-group mx-5" style={{ marginTop: '30px' }} >
                    {
                        meal.map(meals => {
                            return (
                                <Link className="list-group-item" key={meals.idMeal} to={`/detail/${meals.idMeal}`}>{meals.strMeal}</Link>
                            )
                        })
                    }
                </ul>
            )

        } else if (meal == null) return <h1 style={{ margin: '70px', color: 'GrayText' }}>Not Found</h1>
    }

    return (
        <div>
            <Header />
            <div style={{ marginTop: '100px', marginLeft: '30px', marginRight: '30px' }}>
                {/* <h1>Food List Data</h1> */}
                <div className='container'>
                    <ul className="list-group list-group-horizontal row">
                        {
                            alphabet.map(huruf => {
                                return (
                                    <button onClick={() => getAPI(huruf)} className="list-group-item col" style={{ textAlign: 'center' }}>{huruf.toUpperCase()}</button>
                                )
                            })
                        }
                    </ul>
                    {showList()}
                </div>
            </div>
        </div>
    )
}