import React, { Component } from 'react';
var Slider = require('react-slick');
import './redom.css';

class Redom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:""
    }
  }

  // componentDidMount() {
  //   $.get(this.props.source, function(result) {
  //     var lastGist = result[0];
  //     if (this.isMounted()) {
  //       this.setState({
  //         username: lastGist.owner.login,
  //         lastGistUrl: lastGist.html_url
  //       });
  //     }
  //   }.bind(this));
  // }


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div><img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000004dqTTH2tIbho.jpg?max_age=2592000" alt="tupian"/></div>
          <div><img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000004dqTTH2tIbho.jpg?max_age=2592000" alt="tupian" /></div>
          <div><img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000004dqTTH2tIbho.jpg?max_age=2592000" alt="tupian" /></div>
          <div><img src="" /></div>
          <div><img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000004dqTTH2tIbho.jpg?max_age=2592000" alt="tupian" /></div>
          <div><img src="http://y.gtimg.cn/music/photo_new/T003R720x288M000004dqTTH2tIbho.jpg?max_age=2592000" alt="tupian" /></div>
        </Slider>
        <div className="radio">
          <header className="radio-header">电台</header>  
          <ul className="radio-ul">
            <li className="radio-li">
              <a href="##">
                <div className="list">
                  <img onError="this.onerror=null;this.src=defaultPic;" className="list-pic" src="http://qzonestyle.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000" alt="" />
                  <span className="icon icon-play"></span>
                </div>
                <div className="list-info">
                    <h3 className="list-tit">热歌</h3>
                </div>
              </a>
            </li>
            <li className="radio-li">
              <a href="##">
                <div className="list">
                  <img onError="this.onerror=null;this.src=defaultPic;" className="list-pic" src="http://qzonestyle.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000" alt="" />
                  <span className="icon icon-play"></span>
                </div>
                <div className="list-info">
                    <h3 className="list-tit">热歌</h3>
                </div>
              </a>
            </li>
          </ul>  
        </div>
      </div>
    );
  }
}

export default Redom;