import React from 'react';
// import { NavLink} from 'react-router-dom'
class ItemDetail extends React.Component {
    render () { 
      console.log('item', this.props);
      return (
        <div>
            <h1>Brand is: {this.props.brand.title}</h1>
            <img src={this.props.brand.brand_logo_url}/>

        </div>
      );
    }
    
}
export default BrandDetail;