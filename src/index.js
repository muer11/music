import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Redom from './view/redom';
import TopList from './view/TopList';
import Music from './view/Music';
import Search from './view/Search';
import TopListLi from './view/TopListLi';

import './index.css';

ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Redom} />
			<Route path="redom" component={Redom} source="123"></Route>
			<Route path="toplist" component={TopList}></Route>
			<Route path="search" component={Search}></Route>
		</Route>
		<Route path="top/:id" component={TopListLi}></Route>
		<Route path="music/:id" component={Music}></Route>
	</Router>),
  document.getElementById('root')
);
