/**
 * Created by qiyanzi on 16-8-13.
 */
import React, {Component} from 'react';
import PersonItem from './PersonItem';

class People extends Component {
  render() {
    // let list = [{
    //   name: 'hahaha',
    //   image: 'images/01.jpg'
    // }, {
    //   name: 'hahaha',
    //   image: 'images/02.jpg'
    // }, {
    //   name: 'hahaha',
    //   image: 'images/03.jpg'
    // }];
    //如何在这里拿到数据库的数据呢？
    let people = this.props.people;
    //传过来数据，数据怎样使用就是你自己的事情了
    //这样就可以直接拿到数据库的值
    //如何在这里拿到数据库的数据呢？
    return (
        <div className='row'>
          {
            people.map((v,k)=>(
                <PersonItem key={k} name={v.name} image={v.image}/>
            ))
          }
        </div>

    );
  }
}
export default People;