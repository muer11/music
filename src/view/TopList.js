import React, { Component } from 'react';
var $ = require('jquery');
import './TopList.css';


// const musicTop = [{"id":4,"listenCount":19700000,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_109714341.jpg","songList":[{"singername":"BIGBANG (빅뱅)","songname":"FXXK IT (에라 모르겠다)"},{"singername":"BIGBANG (빅뱅)","songname":"LAST DANCE"},{"singername":"林俊杰","songname":"女儿情 (Live)"}],"topTitle":"斯柯达汽车·巅峰榜·流行指数","type":0}];

const musicTopList = [];
class TopList extends Component {
	constructor(props,makeArray) {
	    super(props);
	    this.state = {
	      loading:false
	    }

	}

	componentWillMount(props) {
      $.ajax({
          url: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1481856464420&jsonpCallback=jsonp3",
          type: "GET",
          dataType: "jsonp",
          jsonpCallback:"jsonp3",
          async:false,
          success:function(data){
            makeArray(data);
            //ajax加载完成后
            this.setState({
              loading: false
            })
          }.bind(this)
      });

      function makeArray(data){
        if(musicTopList[0] === undefined){
          data.data.topList.map((data,index) => 
            musicTopList.push(data)
          )
        }
        
      }
      // console.log(rad);
  }


	render() {
		if(this.state.loading){
			return <div>loading</div>
		}else{

			const liA = [];
			musicTopList.map((data,index) => 
				liA.push(<li className="top-li" key={index} id={data.id}>
							<a href={"#/top/"+data.id}>
								<div className="top-li-left">
									<img className="top-img" src={data.picUrl} alt="图片"/>
									<span><i className="erji"></i>{data.listenCount/10000}万</span>
								</div>
								<div className="top-li-right">
									<header className="li-title">{data.topTitle}</header>
									
									<ol>
										{data.songList.map((songli,index) => 
											<li className="ol-li" key={index}><span>{songli.songname}</span>- {songli.singername}</li>
										)}
									</ol>
									
								</div>
							</a>
						</li>)
			)

			return (
				<ul className="top-ul">
					{liA}
				</ul>
			);
		}
		
	}
}

export default TopList;
