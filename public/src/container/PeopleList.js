/**
 * Created by qiyanzi on 16-8-13.
 */
import { connect } from 'react-redux';
import People from '../components/People';

const mapStateToProps = (state) =>(state);
// const mapStateToProps = (state) => ({
//   people: state.people
// });//这样写props里面就只有people，是由压缩后的reduce得到一个数据

// state代表一个对象，里面有people有result，people有了一个props，作为组件的people
// 这是一个映射，第一个是一个对象，第二个括号里面的state是运算以后的结果，把这个结果做一个映射

const PeopleList = connect(mapStateToProps)(People);

export default PeopleList;
