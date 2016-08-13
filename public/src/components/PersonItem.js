/**
 * Created by qiyanzi on 16-8-13.
 */
import React, {Component}from 'react';

class PersonItem extends Component {
  render() {
    let {name,image} = this.props;
    return (
        <div className="text-center col-xs-3">
          <a href="#" className="thumbnail text-center">
            <img src={image} alt="..."/>
          </a>
          <div>{name}</div>
        </div>
    );
  }
}
export default PersonItem;