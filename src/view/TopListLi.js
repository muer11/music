import React, { Component } from 'react';
var $ = require('jquery');
import './TopListLi.css'


let toplistliLI = [];
let toplistliinfo = [];
let toplistlidate = [];
class TopListLi extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      loading:true,
	      topId: this.props.params.id
	    }

	}

	componentWillMount(props) {
		const TopId = this.state.topId;
		const urll = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+TopId+"&_=1481877029404&jsonpCallback=toplistDataCallback";
	      $.ajax({
	          url: urll,
	          type: "GET",
	          dataType: "jsonp",
	          jsonpCallback:"toplistDataCallback",
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
	      	toplistliLI = [];
	      	toplistliinfo = [];
	      	toplistlidate = [];
	        if(toplistliLI[0] === undefined){
	          data.songlist.map((data) => 
	            toplistliLI.push(data)
	          )
	          //标题信息
	          toplistliinfo.push(data.topinfo);
	          //日期
	          toplistlidate.push(data.date);
	        }
	        
	      }
	      // console.log(rad);
	}

	render() {
		if(this.state.loading){
			return (<div>loading</div>)
		}else{
			const toplistliArray = [];
			toplistliLI.map((data, index) => 
				toplistliArray.push(
					<li className="toplistli-li" key={index} data-id={data.data.songid}>
						<a href={"#/music/id="+data.data.songmid+"&mid="+data.data.albummid+"&singer="+data.data.singer[0].name+"&songname="+data.data.songname}>
							<div className="toplistli-li-id">{index+1}</div>
							<div className="toplistli-li-info">
								<h3>{data.data.songname}</h3>
								<p>{data.data.singer[0].name} · {data.data.albumname}</p>
							</div>
						</a>
					</li>
				)
			);
			return (
				<div className="toplistli">
					<div className="toplistli-img">
						<img src={toplistliinfo[0].pic_album} alt="照片"/>
					</div>	
					<div className="toplistli-info">
						<h3>{toplistliinfo[0].ListName}</h3>
						<p>{toplistlidate} 更新</p>
					</div>
					<ul className="toplistli-ul">
						{toplistliArray}
					</ul>
				</div>
			);

		}
	}
}

export default  TopListLi;




