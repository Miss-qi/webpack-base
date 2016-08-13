import express from 'express';
import Todo from '../models/Todo';

let router = express.Router();

router.get('/', (req, res)=> {
    Todo.find((err, data)=> {
        res.send(data);
    });
});
//获取所有的记录

router.get('/:id', (req, res)=> {
    Todo.findOne({
        _id: req.params.id
    }, (err, data)=> {
        res.send(data);
    });
});
// 查询一条记录


router.put('/:id', (req, res)=> {
    Todo.update({
        _id: req.params.id
    }, {
        text: req.body.text
    }, (err, data)=> {
        res.send({
            error: err,
            data
        });
    });
});
//更新，修改

// router.put('/:id', (req, res)=> {
//     Todo:findOne({
//         _id: req.params.id
//     }, (err, doc)=> {
//         doc.text = req.body.text;
//         doc.save((err, data)=> {
//             res.send({
//                 error: null,
//                 data
//             });
//         });
//     });
// });//更新

router.post('/', (req, res, next)=> {
    new Todo({
        text: req.body.text
    }).save((err, todo) => {
        if (err) {
            return next(err);
        } else {
            res.send(todo);
        }
    });
});
//插入

router.delete('/:id', (req, res)=> {
    Todo.findByIdAndRemove(req.params.id, (err)=> {
        res.send({
            error: err
        });
    });
});
//删除

module.exports = router;
// export default router;