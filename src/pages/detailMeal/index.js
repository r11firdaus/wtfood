import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import Header from '../../component/header';
import Spinner from '../../component/spinner';
import getData from '../../config/api';

const DetailMeal = () => {
    const [meal, setmeal] = useState([]);
    const { id } = useParams();
    const spinner = useSelector(state => state.spinner)
    const dispatch = useDispatch()
    const history = useHistory()
    document.title = meal.strMeal ? meal.strMeal : 'What The Food';

    const showElement = () => {
        if (spinner) return Spinner();
            return (
                <div className="wadah">
                    <h2 className="card-title" style={{ alignSelf: 'center', marginTop: '70px', marginLeft: '30px' }}>{meal.strMeal}</h2>
                    <div className="card" style={{ width: '90%', maxWidth: '800px', margin: '70px auto' }}>
                        <img src={meal.strMealThumb} height='400' width='400' className="card-img-top" alt={meal.strMeal + '.jpg'} />
                        <div className="card-body">
                            <p className="card-text"><strong>From: {meal.strArea} </strong></p>
                            <p className="card-text"><strong>Category: {meal.strCategory} </strong></p>
                            <p className="card-text"><strong>Ingredients: </strong>{ingredient()}</p>
                            <p className="card-text"><strong>Instructions: </strong>{meal.strInstructions}</p>
                            <p className="card-text"><strong>Source: </strong><a href={meal.strSource}>{meal.strSource}</a></p>
                            <p className="card-text"><strong>Video: </strong><a href={meal.strYoutube}>{meal.strYoutube}</a></p>
                            <p className="card-text"><strong>Tags: {meal.strTags}</strong></p>
                            {/* <video src={meal.strYoutube} height='400'width='600' controls></video> */}
                            {/* <iframe width="600" height="400" src={meal.strYoutube} frameborder="0" allowfullscreen></iframe> */}
                        </div>
                    </div>
                </div>
            )
    }

    useEffect(() => {
        dispatch({ type: 'CHANGE_SPINNER', value: true })
        getData('lookup', 'i', id).then(response => {
            dispatch({ type: 'CHANGE_SPINNER', value: false })
            if (response) {
                setmeal(response[0])
                let seoMeal = []
                seoMeal = response[0].strMeal.split(' ')
                history.replace(`/detail/${response[0].idMeal}/${seoMeal.join('-')}`)
            } else {
                return <h1 style={{ margin: '70px', color: 'GrayText' }}>Not Found</h1>
            }
        })
    }, [])
    const ingredient = () => {
        let arr = []
        for (let i = 1; i <= 20; i++) {
            let strIng = eval(`meal.strIngredient${i}`);
            let strIngb = eval(`meal.strMeasure${i}`);
            if (strIng == '' || strIngb == '' || strIng == null || strIngb == null) {
                break;
            } else {
                arr.push(`${strIng} ${strIngb}`);
            }
        }
        return arr.join(', ')
    }
    return (
        <div>
            <Header />
            {showElement()}
        </div>
    )
}

export default DetailMeal;