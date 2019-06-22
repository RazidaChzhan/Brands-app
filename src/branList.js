import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import BrandDetail from './brandDetail';

class BrandList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: require('./data/brands_5.json')
    };
  }

  render() {
    console.log ('items', this.state.items);
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Can't Loading JSON file</div>;
    } else {
      return (
        <BrowserRouter history = {History}>
          <div>
            <ul>
              {items.map(item => (
              <li key={item.slug}> 
                  <NavLink to={item.slug} brand = {item} component={BrandDetail}>{item.title}</NavLink>
              </li>
              ))}
            </ul>
            <hr/>
              
          </div>
        </BrowserRouter>
        
      );
    }
  }
}
  

export default BrandList;
