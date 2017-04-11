import React, { Component } from 'react';
import { Link} from 'react-router';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
      super(props);
      this.state = {
        curr: 'active',
        nocurr: ''
      }
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      curr: ''
    })
  }


  render() {
    return (
      <nav>
      	<ul className="nav-ul">
      		<li className={"recom "+this.state.curr} onClick={this.handleClick}><Link to='/redom'>推荐</Link></li>
      		<li className={"toplist "+this.state.curr} onClick={this.handleClick}><Link to='/Toplist'>排行榜</Link></li>
      		<li className={"search "+this.state.curr} onClick={this.handleClick}><Link to='/Search'>搜索</Link></li>
      	</ul>
      </nav>
    );
  }
}

export default Nav;