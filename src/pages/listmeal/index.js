import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import Header from '../../component/header';
import Spinner from '../../component/spinner';
import getData from '../../config/api';

function ListResult() {
    const [meal, setmeal] = useState([]);
    const { category, meals, country } = useParams();
    const history = useHistory();
    const [title, settitle] = useState('');
    const dispatch = useDispatch();
    const spinner = useSelector(state => state.spinner);
    document.title = `Result for '${title}'`

    const showElement = () => {
        if (spinner) return Spinner();
        else {
            return (
                <div>
                    <h3 style={{ marginTop: '70px', marginLeft: '40px' }}>Result for "{title}"</h3>
                    {listData}
                </div>
            )
        }
    }

    const getAPI = keyword => {
        let getMeals;
        if (category) getMeals = getData('filter', 'c', keyword)
        if (country) getMeals = getData('filter', 'a', keyword)
        if (meals) getMeals = getData('search', 's', keyword)
        settitle(keyword)

        getMeals.then(response => {
            dispatch({ type: 'CHANGE_SPINNER', value: false })
            if (response == null) return <h1 style={{ margin: '70px', color: 'GrayText' }}>Not Found</h1>;
            return setmeal(response);
        })

    }

    useEffect(() => {
        dispatch({ type: 'CHANGE_SPINNER', value: true })
        if (category) getAPI(category)
        if (meals) getAPI(meals)
        if (country) getAPI(country)
    }, [])

    const viewDetail = id => {
        history.push(`/detail/${id}`)
    }

    const listData = meal == null ?
        <h1 style={{ margin: '70px', color: 'GrayText' }}>404 Not Found</h1> :
        meal.map(data => {
            return (
                <div className="card" style={{ width: '90%', maxWidth: '600px', margin: '70px auto' }}>
                    <img src={data.strMealThumb} height='400' width='400' className="card-img-top" alt={data.strMeal + '.jpg'} />
                    <div className="card-body">
                        <h5 className="card-title">{data.strMeal}</h5>
                        <button onClick={() => viewDetail(data.idMeal)} className="btn btn-primary">Detail</button>
                    </div>
                </div>
            )
        })

    return (
        <div>
            <Header />
            {showElement()}
        </div>
    )
}

export default ListResult