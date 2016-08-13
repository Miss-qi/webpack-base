const regRouter = (app)=> {
  app.use('/todos', require('./todos'));//express里面的app，把/todos后面一大堆东西扔给todos处理
  app.use('/people', require('./people'));
};

export default regRouter;