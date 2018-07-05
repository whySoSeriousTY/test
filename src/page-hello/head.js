import {Component} from 'react'
import {
    Menu,
    Dropdown,
    Icon,
    Input,
} from 'antd'
import './head.styl'

const Search = Input.Search


export default class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      my: [
        '我的订单',
        '我的评价',
        '我的收藏',
        '抵用券',
        '账户设置',
      ],
      shop: [
        '登录商家中心',
        '我想合作',
        '手机免费开店',
        '餐饮代理商招募',
        '商家申请开票',
      ],
      jiulv: [
        '国际机票',
        '火车票',
        '榛果民宿',
        '经济型酒店',
        '主题酒店',
        '商务酒店',
        '公寓',
        '豪华酒店',
        '客栈',
        '青年旅社',
        '度假酒店',
        '别墅',
        '农家院',
      ],
      meishi: [
        '烤鱼',
        '特色小吃',
        '烧烤',
        '自助餐',
        '火锅',
        '代金券',
      ],
      dianying: [
        '热映电影',
        '热门影院',
        '热映电影口碑榜',
        '最受期待电影',
        '国内票房榜',
        '北美票房榜',
        '电影排行榜',
      ],
      app: [
        'https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/meituan.png',
        'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
        'https://s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png',
        'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
        'https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png',
      ],
      searchHW: [
        '杭州乐园',
        '杭州宋城景区',
        '杭州长乔极地海洋公园',
        '杭州动物园',
      ],


    }
  }

  render() {
    const me = this
    const selguest = (
      <Menu>
        {
                    me.state.my.map(Item => (
                      <Menu.Item key={Item}>
                        <a target="_blank" rel="noopener noreferrer">{Item}</a>
                      </Menu.Item>
                        ))
                }
        {/* <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">我的订单</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">我的评价</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">我的收藏</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">抵用券</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">账户设置</a>
                </Menu.Item> */}
      </Menu>
        )
    const selshop = (
      <Menu>
        {
                    me.state.shop.map(Item => (
                      <Menu.Item key={Item}>
                        <a target="_blank" rel="noopener noreferrer" >{Item}</a>
                      </Menu.Item>
                        ))
                }
        {/* <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">我的订单</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">我的评价</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">我的收藏</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">抵用券</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">账户设置</a>
                </Menu.Item> */}
      </Menu>
        )

    const navi = (
      <Menu>
        {/* <Menu.Item> */}
        <div
          style={{
            width: '1200px',
            sizing: 'border-box',
            radius: '4px',
            padding: '30px 36px 36px 47px',
            display: 'flex',
            justifyContent: 'flex-start',

          }}
        >
          <dl className="header-jiulv head-third">
            <dt>酒店旅游</dt>
            {
                            me.state.jiulv.map(item => (
                              <dd key={item}><a>{item}</a></dd>
                                ))
                        }
          </dl>
          <dl className="header-meishi head-third">
            <dt>吃美食</dt>
            {
                            me.state.meishi.map(item => (
                              <dd key={item}><a>{item}</a></dd>
                                ))
                        }
          </dl>
          <dl className="header-movie head-third">
            <dt>看电影</dt>
            {
                            me.state.dianying.map(item => (
                              <dd key={item}><a>{item}</a></dd>
                                ))
                        }
          </dl>
          <dl className="header-app head-third">
            <dt>手机应用</dt>
            {
                            me.state.app.map(item => (
                              <dd key={item}>
                                <a>
                                  <img className="head-img" src={item} alt={item} />
                                </a>
                              </dd>
                                ))

                        }
          </dl>
        </div>
        {/* </Menu.Item> */}
      </Menu>
        )
    return (
      <div>
        <div
          style={{
            backgroundColor: '#f8f8f8',
          }}
        >
          <div className="first-row">
            <div className="first-left">
              <div className="hot-city"><Icon type="environment" className="hot-city" />杭州</div>
              <a className="change-city">切换城市</a>
              <div className="hot-city-container">
                                [
                            <a className="hot-city">富阳</a>
                <a className="hot-city">德清</a>
                <a className="hot-city">临安</a>
                                ]
                        </div>
              <div className="log">
                <a className="login">立即登陆</a>
                <a className="register">注册</a>
              </div>
            </div>
            <div className="first-right">
              <Dropdown overlay={selguest}>
                <a className="dropdown">
                                    我的美团
                            </a>
              </Dropdown>
              <a className="dropdown">手机APP</a>
              <Dropdown overlay={selshop}>
                <a className="dropdown">
                                    商家中心
                            </a>
              </Dropdown>
              <Dropdown overlay={navi}>
                <a className="dropdown">
                                    网站导航
                            </a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="head">
          <div className="head-container">
            <div className="second-row">
              <div className="logo">
                <a>
                  <img 
                    className="logoimg" 
                    src="https://s0.meituan.net/bs/fe-web-meituan/404d350/img/logo.png" 
                    alt="https://s0.meituan.net/bs/fe-web-meituan/404d350/img/logo.png"
                  />
                </a>
              </div>
              <div className="search-container">
                <Search
                  className="search-input"
                  placeholder="搜索商家或地点"
                  onSearch={value => console.log(value)}
                  enterButton
                  size="large"
                  style={{
                    width: '550px',
                  }}
                />
                <div className="hot-word-container">
                  {
                    me.state.searchHW.map(item => (<a key={item} className="search-hot-word">{item}</a>
                                            ))
                                    }
                </div>
              </div>
              <div className="header-commitment">
                <ul>
                  <li className="commitment">
                    <Icon type="shopping-cart" className="S-icon" />
                    <span>随时退</span>
                  </li>
                  <li className="commitment">
                    <Icon type="bank" className="S-icon" />
                    <span>不满意免单</span>
                  </li>
                  <li className="commitment">
                    <Icon type="smile-o" className="S-icon" />
                    <span>过期退</span>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
