import {Component} from 'react'
// import {
//   Button,
//   } from 'antd'

import './contentBlock.styl'


const $ = window.$

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // contentGD: {
      //     title: '有格调',
      //     links: [this.state.select.links, this.database.meeting.links, this.state.database.SPA.links, this.state.database.movie.links, this.state.adatabase.hiking.links,]
      // },
      select: {
        links: '全部',
        tabID: '0',
        data: [
          {
            img: '//p0.meituan.net/msmerchant/f70caba41dac89c914f77eca3e653f0b1746881.jpg@736w_416h_1e_1c',
            title: '心创作料理（龙湖天街店）',
            subTitle: '心·豪华聚餐，建议5-6人使用',
            icon: '￥',
            price: '998',
            unit: '',
            oldPrice: '门市价¥1258',
            location: '龙湖滨江天街',
          },
          {
            img: '//p0.meituan.net/deal/__36992123__7764178.jpg@736w_416h_1e_1c',
            title: '浙江实验艺术剧场',
            subTitle: '巨幕厅',
            icon: '￥',
            price: '19.9',
            unit: '/人均',
            oldPrice: '',
            location: '',
          },
          {
            img: '//p0.meituan.net/merchantpic/1969c3ab4188a1e94f097d7cdf0897ba593105.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|736w_416h_1e_1c',
            title: 'LSMY力舍名媛',
            subTitle: 'LSMY力舍名媛',
            icon: '￥',
            price: '416',
            unit: '/人均',
            oldPrice: '',
            location: '城西银泰城',
          },
          {
            img: '//p0.meituan.net/msmerchant/b876fc61efdf9359d7cb62078e25d474684397.jpg@736w_416h_1e_1c',
            title: '大蔬无界 杭州国大城市广场美素馆',
            subTitle: '黑珍珠四人套餐，提供免费WiFi',
            icon: '￥',
            price: '898',
            unit: '',
            oldPrice: '门市价¥1039',
            location: '国大城市广场',
          },
          {
            img: '//p1.meituan.net/deal/__31414153__4808538.jpg@736w_416h_1e_1c',
            title: '传奇奢华影城(丰潭路店)',
            subTitle: '免押金,可停车,儿童票,中国巨幕厅',
            icon: '￥',
            price: '19.9',
            unit: '/人均',
            oldPrice: '',
            location: '',
          },
          {
            img: '//p1.meituan.net/tdchotel/f4dd8fe34f1089308eac6f9362bc607b178856.jpg@736w_416h_1e_1c',
            title: '杭州雷迪森龙井庄园',
            subTitle: ['亲子场景酒店', '复式loft', '休闲度假', '发票推荐', '亲子酒店点评', '含早'],
            icon: '￥',
            price: '1204',
            unit: '/起',
            oldPrice: '',
            location: '',
          },
        ],
      },

      database: [],
    }


    // -----------------------------------------------------------
    // $.ajax({
    //   url: 'http://127.0.0.1:9999/mock/page-hello/getContent',
    //   async: true,
    //   success(data) {
    //     data.content.database.map(item => (
    //       <span
    //         key={item.links}
    //         id={item.tabID}
    //         className={me.state.select.links === item.links ? 
    //         'content-links selected' : 'content-links'}
    //         onMouseOver={() => {
    //           me.handleClick(item)
    //         }}
    //       >
    //         {item.links}

    //       </span>
    //             ))
    //   },
    // })
    // --------------------------------------------------------------


    this.getdata()
  }

  getdata() {
    $.ajax({
      url: 'http://127.0.0.1:9999/mock/page-hello/getContent',
      async: true,
      success: data => {
        this.state.database = data.content.database
        this.setState(this.state)
      },
    })
  }


  handleClick(it) {
    this.state.select = it
    this.setState(this.state)
  }
  handleSubTitle(text) {
    if (text.subTitle instanceof Array) {
      return (
        text.subTitle.map(tip => (
          <span 
            key={`${tip}`}
            className="tip"
          > 
            {tip}
          </span>
        ))
        
      )
    } 
    return text.subTitle
  }

  render() {
    const me = this


    return (
      <div
        style={{
          backgroundColor: '#f8f8f8',

        }}
      >

        <div
          style={{
            width: '1200px',
            margin: '40px auto',
            border: '1px solid #e5e5e5',
            borderRadius: '5px',

          }}
        >
          <div className="block-title-container" >
            <div className="block-title">有格调</div>
            <div>

              {/* <span  className='content-links' onMouseOver={mouseOver(me.state.select)}>
                                {me.state.select.links}
                            </span> */}
              {
                this.state.database.map(item => 
                  <span
                    key={item.links}
                    id={item.tabID}
                    className={me.state.select.links === item.links ?
                      'content-links selected' : 'content-links'}
                    onMouseOver={() => {
                      me.handleClick(item)
                    }}
                  >
                    {item.links}

                  </span>
                )

              }
            </div>

          </div>
          <div className="block-content">
            {
              
              me.state.select.data.map(i => (
                
                <div
                  key={`${me.state.select.tabID}.${i.img}`}
                  className="block-items"
                >
                  {
                      
                    <a className="block-link">
                      <div className="image">
                        <img className="img" src={i.img} alt={i.img} />
                      </div>

                      <div
                        style={{
                          textAlign: 'left',
                        }}
                      >
                        <div className="item-title">{i.title}</div>
                        <div className="item-subTitle">{
                          
                            this.handleSubTitle(i)
                          
                        }</div>
                        <div className="price-info">
                          <span
                            style={{
                              cursor: 'pointer',
                            }}
                          >
                            <span className="icon">{i.icon}</span>
                            <span className="price">
                              {i.price}
                              <span className="unit">
                                {i.unit}
                              </span>
                            </span>
                          </span>
                          <span className="oldPrice">{i.oldPrice}</span>
                          <span className="location">{i.location}</span>

                        </div>
                      </div>
                    </a>
                      
                    }
                </div>

              ))
            }

          </div>

        </div>
        {/* <Button
          onClick={() => {
            $.get('http://127.0.0.1:9999/mock/page-hello/getContent', (data, status) => {
              alert(`数据: ${data.content.database.map(item => (item.data))}\n状态: ${status}`)
            })
          }}
        >
                    click
                </Button> */}
      </div>
    )
  }


}
