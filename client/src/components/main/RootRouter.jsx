import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import PostPage from './PostPage.jsx';
import CreateNewPost from './CreateNewPost.jsx';

const RootRouter = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/post/new' component={CreateNewPost} />
    <Route exact path='/post/:id' component={PostPage} />
  </Switch>
);

export default RootRouter;