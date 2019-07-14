import React from "react";
class BrandDetail extends React.Component {
  render() {
    console.log("item", this.props);
    return (
      <div>
        <form action="/">
          <h1>Brand is: {this.props.brand.title}</h1>
          <img src={this.props.brand.brand_logo_url} />
          <button type='submit'>Back</button>
        </form>

      </div>
    );
  }
}
export default BrandDetail;
