import React, { Component } from 'react';
import Header from './view/Header';
import Nav from './view/nav';
// import Redom from './redom';
// import Example from './Example';
import './App.css';


 class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Nav />
				{this.props.children}
			</div>
		);
	}
}

export default App;