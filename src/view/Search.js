import React, { Component } from 'react';
var $ = require('jquery');

import "./Search.css";


let SearchEndLi = [];
let hotLi = [];
let ii = 1;
let totalnum;
let curpage;
let curnum;
let SearchEnd = [];
class Search extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      loading:true,
	      value:"",
	      isSearch:false,
	      isHidden: "hidden",
	      isFocus: false,
	      isHistoryCode: true,
	      isRemove: false
	    }

	    this.searchChange = this.searchChange.bind(this);
	    this.clickHandle = this.clickHandle.bind(this);
	    this.clickClose = this.clickClose.bind(this);
	    this.searchFocus = this.searchFocus.bind(this);
	    this.historyClose = this.historyClose.bind(this);
	    this.searchBlur = this.searchBlur.bind(this);
	    this.historyCloseAll = this.historyCloseAll.bind(this);
	    this.goOnSearch = this.goOnSearch.bind(this);
	}

	componentWillMount(props) {
      $.ajax({
          url: "https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1481873464783&jsonpCallback=jsonp"+ii+"",
          type: "GET",
          dataType: "jsonp",
          jsonpCallback:"jsonp"+ii,
          async:false,
          success:function(data){
            makeArray(data);
            ii++;
            //ajax加载完成后
            this.setState({
              loading: false
            })
          }.bind(this)
      });

      function makeArray(data){
        if(hotLi[0] === undefined){
          data.data.hotkey.map((data) => 
            hotLi.push(data)
          )
        }
        
      }
	      // console.log(rad);
	}


	clickHandle(event) {
		if(event.target.value) {
			this.setState({
				isHidden: ""
			});
		}else{
			this.setState({
				isHidden: "hidden"
			});
		}
		let SearchKey = event.target.innerHTML.replace(/^\s+|\s+$/g,"");
		document.getElementsByTagName('input')[0].value = SearchKey;
		const url1 = "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=1019155397&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+SearchKey.replace(" ",'+')+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1481960424567&jsonpCallback=jsonp"+ii+"";
			$.ajax({
	          url: url1,
	          type: "GET",
	          dataType: "jsonp",
	          jsonpCallback:"jsonp"+ii,
	          async:false,
	          success:function(data){
	          	ii++;
	            makeArray(data);
	            //ajax加载完成后
	            this.setState({
	              isFocus: true,
	              isSearch: true
	            })
	          }.bind(this)
	      	});

			function makeArray(data){

				SearchEndLi = [];

		        if(SearchEndLi[0] === undefined){
		          	data.data.song.list.map((data) => 
		            	SearchEndLi.push(data)
		          	)

		        	totalnum = data.data.song.totalnum;
		        	curpage = data.data.song.curpage;
		        	curnum = data.data.song.curnum;

		        }
		        
		    }
		    //清空当前数组，避免所有的数据都再里面
		    SearchEnd = [];
	}

	searchChange(event) {
		if(event.target.value) {
			this.setState({
				isHidden: ""
			});
		}else{
			this.setState({
				isHidden: "hidden"
			});
		}
		this.setState({
			value:event.target.value
		});     
		let SearchKey = this.state.value.replace(/^\s+|\s+$/g,"");

		if(event.keyCode === 13){
			if(window.localStorage['historyCode'] === undefined){
				window.localStorage['historyCode'] = SearchKey;
			}else{
			 	window.localStorage['historyCode'] += "&&"+SearchKey;
			}
			
			const url1 = "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+SearchKey+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1482113930875&jsonpCallback=jsonp"+ii+"";
			$.ajax({
	          url: url1,
	          type: "GET",
	          dataType: "jsonp",
	          jsonpCallback:"jsonp"+ii,
	          async:false,
	          success:function(data){
	          	ii++;
	            makeArray(data);
	            //ajax加载完成后
	            this.setState({
	              isSearch: true
	            })
	          }.bind(this)
	      	});

			function makeArray(data){

				SearchEndLi = [];

		        if(SearchEndLi[0] === undefined){
		          data.data.song.list.map((data) => 
		            SearchEndLi.push(data)
		          )

				totalnum = data.data.song.totalnum;
		        curpage = data.data.song.curpage;
		        curnum = data.data.song.curnum;

		        }
		        
		    }
		}
		//清空当前数组，避免所有的数据都再里面
		SearchEnd = [];
		// if(event.target = )
	}

	goOnSearch() {
		curpage++;
		let SearchKey = document.getElementsByTagName('input')[0].value;
		const url1 = "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+SearchKey+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p="+curpage+"&remoteplace=txt.mqq.all&_=1482113930875&jsonpCallback=jsonp"+ii+"";
		$.ajax({
          url: url1,
          type: "GET",
          dataType: "jsonp",
          jsonpCallback:"jsonp"+ii,
          async:false,
          success:function(data){
          	ii++;
            makeArray(data);
            //ajax加载完成后
            this.setState({
              isSearch: true
            })
          }.bind(this)
      	});

		function makeArray(data){

			SearchEndLi = [];
	        if(SearchEndLi[0] === undefined){
	          data.data.song.list.map((data) => 
	            SearchEndLi.push(data)
	          )

			totalnum = data.data.song.totalnum;
	        curpage = data.data.song.curpage;
	        curnum = data.data.song.curnum;

	        }
	        
	    }
	}

	searchFocus(event) {
		this.setState({
			isFocus: true
		})
		//检测localstorge里有没有东西
		if(window.localStorage['historyCode'] !== undefined){
			this.setState({
				isHistoryCode: false
			});
		}
		// console.log(this.state.isFocus)
	
	}

	searchBlur(event) {
		this.setState({
			isFocus: false,
			isHidden: 'hidden',
			isSearch: false
		})
			
		this.refs.searchInput.value = '';
		// console.log(this.state.isFocus)
	
	}


	clickClose(event) {
		this.setState({
			isHidden: "hidden",
		});

		this.refs.searchInput.value = '';
	}


	historyClose(event) {
		event.stopPropagation();
		const that = this;
		//示例 localstorge.historyCode的格式
		// localstorge.historyCode = "123&456&456";
		//遍历localstorge里的historyCode
		window.localStorage['historyCode'].split("&&").map(function(data,index){
			// console.log(data);
			// console.log(event.target.parentNode.previousSibling.innerHTML);
			//点击要删除的搜索项
			if(data === event.target.parentNode.previousSibling.innerHTML){
				//判断localstorge的historyCode里没有么&&
				if(window.localStorage['historyCode'].indexOf("&") !== -1){
					//判断点击的是不是localstorge的historyCode最后一个&&后的字符串
					if(window.localStorage['historyCode'].split("&&")[window.localStorage['historyCode'].split("&&").length] === data){
						//是 直接把字符串中删除点击的字符串（即data）
						window.localStorage['historyCode'] = window.localStorage['historyCode'].replace(data,"");
					}else{
						//不是 把字符串中删除点击的字符串加上&&（即data&&）
						window.localStorage['historyCode'] = window.localStorage['historyCode'].replace(data+"&&","");
					}
					that.setState({
						isHistoryCode: false
					})
				}else{
					//如果localstorge的historyCode里只有一个（即没有&&）直接清空
					window.localStorage.clear();
					that.setState({
						isHistoryCode: true
					})
				}
			}	
		});


	}

	historyCloseAll() {
		window.localStorage.clear();
		this.setState({
			isHistoryCode: true
		});
	}

	render() {
		if(this.state.loading){
			//是先loading等数据加载进来再搜索初始化
			return <div>loading</div>
		}else{

			if(this.state.isFocus){

				if(this.state.isSearch){

					if(SearchEndLi[0] === undefined){
						//input输入后 得到空数组，显示暂无数据
						return (
							<div>
								<div className="search-input">
									<div>
										<input type="text" ref="searchInput" placeholder="搜索歌曲、歌单、专辑" onKeyUp={this.searchChange} ></input>
										<span className={"search-icon "+this.state.isHidden} onClick={this.clickClose}>+</span>
									</div>
								</div>

								<div className="search-end">
									<h3>搜索结果</h3>
									<div>暂无数据</div>
								</div>	
							</div>
						);
					}else{
						//搜索结果
						// console.log(totalnum);
						// console.log(curpage);
						// console.log(curnum);
						//判断下是否数据还有下一页
						if(totalnum > (curpage*20 + curnum)){

							SearchEndLi.map((data, index) => 
								SearchEnd.push(
											<li className="search-end-li" key={index+20*curpage}>
												<a href={"#/music/id="+data.songmid+"&mid="+data.albummid+"&singer="+data.singer[0].name+"&songname="+data.songname}>
													<i></i>
													<div>
														<h3>{data.songname}</h3>
														<p>{data.singer[0].name}</p>
													</div>
												</a>
											</li>
								)
							);
							return (
								<div>
									<div className="search-input">
										<div>
											<input style={{width:"70%"}} type="text" ref="searchInput" placeholder="搜索歌曲、歌单、专辑" onKeyUp={this.searchChange } onFocus={this.searchFocus} ></input>
											<span style={{right:"50px"}} className={"search-icon "+this.state.isHidden} onClick={this.clickClose}>+</span>
											<button className="search-history-cancel" onClick={this.searchBlur} >取消</button>
										</div>
									</div>

									<div className="search-end">
										<h3>搜索结果</h3>
										<ul>
											{SearchEnd}
											<li className="search-end-li" onClick={this.goOnSearch}>加载更多</li>
										</ul>
									</div>	
								</div>
							);
						}else{
							SearchEnd = [];
							SearchEndLi.map((data, index) => 
								SearchEnd.push(
											<li className="search-end-li" key={index}>
												<a href={"#/music/id="+data.songmid+"&mid="+data.albummid+"&singer="+data.singer[0].name+"&songname="+data.songname}>
													<i></i>
													<div>
														<h3>{data.songname}</h3>
														<p>{data.singer[0].name}</p>
													</div>
												</a>
											</li>
								)
							);

							return (
								<div>
									<div className="search-input">
										<div>
											<input style={{width:"70%"}} type="text" ref="searchInput" placeholder="搜索歌曲、歌单、专辑" onKeyUp={this.searchChange } onFocus={this.searchFocus} ></input>
											<span style={{right:"50px"}} className={"search-icon "+this.state.isHidden} onClick={this.clickClose}>+</span>
											<button className="search-history-cancel" onClick={this.searchBlur} >取消</button>
										</div>
									</div>

									<div className="search-end">
										<h3>搜索结果</h3>
										<ul>
											{SearchEnd}
										</ul>
									</div>	
								</div>
							);
						}

						
					}
				}else{
					//历史搜索初始化

					if(this.state.isHistoryCode){
						//如果localstorge里没有东西
						return (
							<div>
								<div className="search-input">
									<div>
										<input style={{width:"70%"}} type="text" ref="searchInput" placeholder="搜索歌曲、歌单、专辑" onKeyUp={this.searchChange } onFocus={this.searchFocus} ></input>
										<span style={{right:"50px"}} className={"search-icon "+this.state.isHidden} onClick={this.clickClose}>+</span>
										<button className="search-history-cancel" onClick={this.searchBlur} >取消</button>
									</div>
								</div>
							</div>
						);
					}else{
						//如果localstorge里有东西
						const historySearchKey = window.localStorage['historyCode'].split('&&');
						const historySearchKeyLi = [];
						historySearchKey.map((data,index) =>
							historySearchKeyLi.push(
										<li className="search-history-li" key={index} onClick={this.clickHandle}>
											<div>
												<span className="search-history-icon"></span>
												<span className="search-history-name">{data}</span>
												<span className="search-history-close" onClick={this.historyClose}><span>+</span></span>
											</div>
										</li>)
						);

						return (
							<div>
								<div className="search-input">
									<div>
										<input style={{width:"70%"}} type="text" ref="searchInput" placeholder="搜索歌曲、歌单、专辑" onKeyUp={this.searchChange } onFocus={this.searchFocus} ></input>
										<span style={{right:"50px"}} className={"search-icon "+this.state.isHidden} onClick={this.clickClose}>+</span>
										<button className="search-history-cancel" onClick={this.searchBlur} >取消</button>
									</div>
								</div>

								<div className="search-hot">
									<h3>历史搜索</h3>
									<ul>
										{historySearchKeyLi}
										<li className="search-history-all" onClick={this.historyCloseAll}>清除全部</li>
									</ul>
								</div>	
							</div>
						);
					}
					
				}

			}else{

				//搜索初始化
				const hot = [];
				for (var i = 0; i < 9; i++) {
					hot.push(<li key={i} id={hotLi[i].n} onClick={this.clickHandle}>{hotLi[i].k}</li>)
				}

				return (
					<div>
						<div className="search-input">
							<div>
								<input type="text" ref="searchInput" placeholder="搜索歌曲、歌单、专辑" onKeyUp={this.searchChange } onFocus={this.searchFocus}></input>
								<span className={"search-icon "+this.state.isHidden} onClick={this.clickClose}>+</span>
							</div>
						</div>

						<div className="search-hot">
							<h3>热门搜索</h3>
							<ul>
								{hot}

							</ul>
						</div>	
					</div>
				);
			}
				
			
		}
		
	}
}

export default Search;