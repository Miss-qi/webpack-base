/**
 * Created by qiyanzi on 16-8-13.
 */
import request from 'superagent';
const peopleRequestMiddleware = store => next=> action=> {

  switch (action.type) {
  case 'INIT':
    request.get('/people')
          .end((err,res)=> {
            next({
              type:'PEOPLE_LOADED',
              data: res.body
            });
          });
    break;
  }

  next(action);
};//一个参数可以省略括号
export default peopleRequestMiddleware;