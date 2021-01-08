import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Home, Login, Register,ListResult, DetailMeal, Category, Country, FoodList } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/category">
                    <Category />
                </Route>
                <Route path="/country">
                    <Country />
                </Route>
                <Route path="/foodlist">
                    <FoodList />
                </Route>
                <Route path="/result/category/:category">
                    <ListResult />
                </Route>
                <Route path="/result/country/:country">
                    <ListResult />
                </Route>
                <Route path="/result/meal/:meals">
                    <ListResult />
                </Route>
                <Route path="/detail/:id">
                    <DetailMeal />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>            
    )
}

export default Routes;