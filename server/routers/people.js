/**
 * Created by qiyanzi on 16-8-13.
 */
import express from 'express';
import Person from '../models/Person';

let router = express.Router();

router.get('/', (req, res)=> {
  Person.find((err, data)=> {
    res.send(data);
  });
});
//获取所有的记录

router.get('/:id', (req, res)=> {
  Person.findOne({
    _id: req.params.id
  }, (err, data)=> {
    res.send(data);
  });
});
// 查询一条记录


router.put('/:id', (req, res)=> {
  Person.update({
    _id: req.params.id
  }, {
    name: req.body.name
  }, (err, data)=> {
    res.send({
      error: err,
      data
    });
  });
});
//更新，修改

router.post('/', (req, res, next)=> {
  new Person({
    name: req.body.name
  }).save((err, person) => {
    if (err) {
      return next(err);
    } else {
      res.send(person);
    }
  });
});
//插入

router.delete('/:id', (req, res)=> {
  Person.findByIdAndRemove(req.params.id, (err)=> {
    res.send({
      error: err
    });
  });
});
//删除

module.exports = router;