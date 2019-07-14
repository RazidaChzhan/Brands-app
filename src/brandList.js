import React from "react";
import { NavLink } from "react-router-dom";

class BrandList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: require("./data/brands.json")
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <ul>
          {items.map(item => (
            <li key={item.slug}>
              <NavLink to={`/detail/${item.slug}`}>
                {item.brand_logo_url !== null ? (
                  <img src={item.brand_logo_url} />
                ) : (
                  item.title
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <hr />
      </div>
    );
  }
}

export default BrandList;
