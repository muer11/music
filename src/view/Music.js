import React, { Component } from 'react';
var $ = require('jquery');
import './Music.css';


class Music extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      loading:true,
	      topId: this.props.params.id
	    }

	}
	componentWillMount(props) {
		let TopId = this.state.topId.split("&");
		const musicId = TopId[0].split('=')[1];
		console.log(musicId);
		const urll = "https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid=107192078&songtype=0";
	    const url2 = "https://c.y.qq.com/splcloud/fcgi-bin/fcg_musiclist_getmyfav.fcg?songid=107192078&songtype=13&g_tk=5381&_=1481956353745&jsonpCallback=jsonp8";
	      $.ajaxSetup({
			    'beforeSend': function(xhr) {
			    	xhr.setRequestHeader("referer", "https://c.y.qq.com/v8/playsong.html?playindex=0&songid=102636799,107192078,5106429,109364695,105030812,104861467,9082287,104783753,102793935,102349482,107192538,107903929,9058628,104936872,5016168,107762031,102193601,107329447,1313990,109596064,102425546,647969,105974515,109566128,1313992,1313993,9059607,102376507,1166273,7168586,9103820,4830342,107762006,107762013,5080232,109723240,102415346,7228566,5016169,102367085,108708182,102954020,101555425,102629053,103973838,102689038,109009325,109391904,108534595,107674608")
			    }
		  })
	      $.ajax({
	          url: urll,
	          type: "GET",
	          dataType: "jsonp",
	          jsonpCallback:"jsonp7",
	          async:false,
	          success:function(data){
	          	console.log(data);
	            makeArray(data);
	            //ajax加载完成后
	            this.setState({
	              loading: false
	            })
	          }.bind(this)
	      });

	      function makeArray(data){
	      	
	      }
	}


	render() {
		let TopId = this.state.topId.split("&");
		const musicId = TopId[0].split('=')[1];
		const abmuId = TopId[1].split('=')[1];
		const textColor = "url(https://y.gtimg.cn/music/photo_new/T002R150x150M000"+abmuId+".jpg?max_age=2592000)";
		const admuImg = "https://y.gtimg.cn/music/photo_new/T002R150x150M000"+abmuId+".jpg?max_age=2592000";
		const songname = TopId[3].split('=')[1];
		const singer = TopId[2].split('=')[1];
		return(
			<div>
				<header className="music_header">
					<div className="music-img">
						<img src={admuImg} alt="照片"/>
					</div>
					<div className="music-info">
						<h3>{songname}</h3>
						<p>{singer}</p>
					</div>
				</header>
				<div className="bg" style={{backgroundImage: textColor}}></div>
				<div className="mask_bg"></div>
				<audio src={"http://ws.stream.qqmusic.qq.com/C100"+musicId+".m4a?fromtag=0"} controls="controls" >
				</audio>
			</div>
		);
	}
}

export default Music;