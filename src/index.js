import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import { Helmet } from "react-helmet";
import BrandList from './branList';
import BrandDetail from './brandDetail';
const items = require('./data/brands_5.json');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/detail" component={BrandDetail} />
            <Route exact path="/" component={BrandList} />
            {items.map(item => (
                    <Route path={item.slug} brand = {item} component={BrandDetail}/>
                  )
                  )}
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>BrandList</title>
                </Helmet>

        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)