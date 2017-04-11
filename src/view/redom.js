import React, { Component } from 'react';
var Slider = require('react-slick');
// // var nocache = require('superagent-no-cache');
// var request = require('superagent');
// var prefix = require('superagent-prefix')('/static');
var $ = require('jquery');
// require('../../public/jquery');
import './redom.css';



// const radioList = [{"picUrl":"http://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg","Ftitle":"热歌","radioid":199},{"picUrl":"http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg","Ftitle":"一人一首招牌歌","radioid":307}];
// const slider = [{"linkUrl":"http://share.y.qq.com/l?g=2766&id=1593456&g_f=shoujijiaodian","picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M000004dqTTH2tIbho.jpg","id":7922},{"linkUrl":"http://y.qq.com/msa/179/sudalvlive.html?&g_f=shoujijiaodian","picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M00000091Tz636ehha.jpg","id":7937},{"linkUrl":"http://y.qq.com/w/album.html?albummid=0024dNz52f0MQB","picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M000002nskLK0m8btN.jpg","id":7976},{"linkUrl":"http://y.qq.com/live/170/guoweivc.html","picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M000004Zfbu03Ee3fK.jpg","id":7956},{"linkUrl":"http://y.qq.com/w/album.html?albummid=0014ULNV1URFHj","picUrl":"http://y.gtimg.cn/music/photo_new/T003R720x288M000003qM1OD29looM.jpg","id":7973}];
const rad = [];
const sli = [];
class Redom extends Component {
  constructor(props,makeArray) {
    super(props);
    this.state = {
      id:"",
      name:"",
      loading:true
    }
    this.makeArray = this.makeArray.bind(this);

    



  }

    makeArray(data) {
        data.data.radioList.map((data,index) => 
          rad.push(data)
        )

        data.data.slider.map((data,index) => 
          sli.push(data)
        )
    }


 

  componentWillMount(props) {
   // $.ajax({
   //      url: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1481771089323&jsonpCallback=jsonp1",
   //      type: "GET",
   //      dataType: "jsonp",
   //      jsonpCallback:"jsonp1",
   //      async:false,
   //    }).done( function(data) {
   //        data.data.slider.map((data,index) => 
   //          slider.push(<div key={index} id={data.id}><img src={data.picUrl} alt="tupian"><a href={data.linkUrl}></a></img></div>)
   //        );
   //        console.log(slider);
   //        this.setState({
   //          name:data.data.radioList[0].Ftitle,
   //          sliderss:slider
   //        });    
   //    }.bind(this));
      $.ajax({
          url: "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1481771089323&jsonpCallback=jsonp1",
          type: "GET",
          dataType: "jsonp",
          jsonpCallback:"jsonp1",
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
        if(rad[0] === undefined){
          console.log(rad[0]);
          data.data.radioList.map((data,index) => 
            rad.push(data)
          )
          data.data.slider.map((data,index) => 
            sli.push(data)
          )
        }
        
      }
      // console.log(rad);
  }


  render(){
      if(this.state.loading){
        return <div>loading</div>
      }else{
        //等ajax把数push进去后执行
        const sliderLi = [];
        sli.map((data,index) => 
          sliderLi.push(<div key={index} id={data.id}><img src={data.picUrl} alt="tupian"></img></div>)
        )
        const radioLi = [];
        rad.map((data,index) => 
          radioLi.push(<li className="radio-li" key={index} id={data.radioid}>
                        <a href="##">
                          <div className="list">
                            <img  className="list-pic" src={data.picUrl} alt="" />
                            <span className="icon icon-play"></span>
                          </div>
                          <div className="list-info">
                              <h3 className="list-tit">{data.Ftitle}</h3>
                          </div>
                        </a>
                      </li>)
        )
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          autoplay: true,
        }
        return (
          <div>
            <Slider {...settings}>
              {sliderLi}
            </Slider>
            <div className="radio">
              <header className="radio-header">电台</header>  
              <ul className="radio-ul">
               {radioLi}
              </ul>  
            </div>
          </div>
        );
      }

      

  }
}

export default Redom;