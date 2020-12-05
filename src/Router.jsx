import React from 'react';
import {Route, Switch} from 'react-router';
import {SignIn, ProductEdit, Reset, SignUp, ProductList, ProductDetale, CartList, OrderComfirm} from './templates';
import Auth from "./Auth";

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/signup'} component={SignUp} />
            <Route exact path={'/signin'} component={SignIn} />
            <Route exact path={'/signin/reset'} component={Reset} />

            <Auth>
                <Route exact path="(/)?" component={ProductList} />
                <Route exact path={'/product/:id'} component={ProductDetale} />
                <Route path={'/product/edit(/:id)?'} component={ProductEdit} />

                <Route exact path={'/cart'} component={CartList} />
                <Route exact path={'/order/confirm'} component={OrderComfirm} />
            </Auth>
        </Switch>
    )
}

export default Router;