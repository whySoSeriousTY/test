import {Component} from 'react'
import './classify.styl'
import {
    Popover,
    Carousel,
    Button,
} from 'antd'


export default class Classify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classifyLinks: [
        '美团外卖',
        '猫眼电影',
        '美团酒店',
        '民宿/公寓',
        '商家入驻',
      ],
      classify: [
        {
          title: '美食',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '外卖',
          icon: '',
          content: ['美团外卖'],
        },
        {
          title: '酒店',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '榛果民宿',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '猫眼电影',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '机票/火车票',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '休闲娱乐/KTV',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '生活服务',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '丽人/美发/医学美容',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '结婚/婚纱摄影/婚宴',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '亲子/儿童乐园/幼教',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '运动健身/健身中心',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '家装/建材/家居',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '学习培训/音乐培训',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '医疗健康/宠物/爱车',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },
        {
          title: '酒吧/密室逃脱',
          icon: '',
          content: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '糖/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
        },


      ],
    }
  }

  render() {
    const me = this
    return (
      <div style={{backgroundColor: '#F8F8F8'}}>
        <div className="classify">
          <div className="classify-root">
            <div className="classify-title">
              <div className="text-all-classify">
                                全部分类
                            </div>
              <div className="classify-links">
                {
                                    me.state.classifyLinks.map(item => (
                                      <a key={item} href="#" className="hot-links">{item}</a>
                                        ))
                                }
              </div>
            </div>

          </div>

        </div>
        <div
          className="classify-content" style={{
            width: '1200px',
            margin: '0 auto',
                   
            display: 'flex',
          }}
        >
          <div className="classify-list">
            <ul className="list-inner">
              {
                                me.state.classify.map(item => (

                                  <Popover
                                    key={item.title} placement="right" title={<div
                                      style={{
                                        fontSize: '16px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        padding: '5px',

                                      }}
                                    >{item.title}<a>
                                                更多>
                                                </a>
                                    </div>} content={
                                      <div
                                        style={{
                                          display: 'flex',
                                          flexWrap: 'wrap',
                                          width: '400px',
                                          fontSize: '12px',
                                          padding: '20px',

                                        }}
                                      >{
                                                    item.content.map(i => (
                                                      <a
                                                        key={`${item}.${i}`} style={{
                                                          padding: '5px',

                                                        }}
                                                      >{i}</a>
                                                        ))}
                                      </div>

                                        }
                                  >
                                    <a
                                      href="#" style={{
                                        width: '240px',
                                        color: 'white',
                                        fontSize: '14px',


                                      }}
                                    ><li className="list-content">{item.title}
                                      <span
                                        style={{

                                          float: 'right',
                                        }}
                                      >></span>
                                    </li>
                                    </a>
                                  </Popover>

                                    ))
                            }
            </ul>

          </div>

          <div
            style={{
                        
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1',
              marginTop: '20px',


            }}
          >
            <div
              style={{
                display: 'flex',

              }}
            >
              <div
                style={{
                  width: '550px',
                  height: '240px',
                }}
              >
                <Carousel autoplay>
                  <div><img className="roll" src="http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg" /></div>
                  <div><img className="roll" src="http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg" /></div>
                  <div><img className="roll" src="http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg" /></div>
                  <div><img className="roll" src="http://p0.meituan.net/codeman/00c8bc1c25fbcc6d0651b29a2057a8c1560658.png" /></div>
                  <div><img className="roll" src="http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg" /></div>
                </Carousel>

              </div>
              <div>
                <a><img className="row1-pic" src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" /></a>
              </div>
            </div>


            <div
              style={{
                marginLeft: '10px',
              }}
            >
              <a><img className="row2-pic1" src="http://p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png" /></a>
              <a><img className="row2-pic2" src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" /></a>
              <a><img className="row2-pic3" src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" /></a>
            </div>

          </div>
          <div
            style={{
              width: '228px',
              float: 'right',
              marginTop: '20px',

            }}
          >
            <div
              className="login-container" style={{
                width: '228px',
                height: '240px',
                backgroundColor: '#fff',
                border: ' 1px solid #e5e5e5',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',

                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '30px',
                    paddingBottom: '10px',

                  }}
                >
                  <img className="head-pic" src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" />
                </div>
                <p className="user-name">Hi ! 你好</p>
                <Button
                  size="large" style={{
                    borderRadius: '40px',
                    width: '118px',
                    margin: '10px auto 15px',
                    background: '#fff',
                    fontSize: '14px',
                    color: '#333',

                  }}
                >注册</Button>
                <Button
                  size="large" style={{
                    borderRadius: '40px',
                    width: '118px',
                    margin: '10px auto 15px',
                    background: '#fff',
                    fontSize: '14px',
                    color: '#333',

                  }}
                >立即登陆</Button>
              </div>

            </div>
            <div
              className="download-app" style={{
                marginTop: '10px',
                width: '230px',
                height: '167px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#fff',
                border: ' 1px solid #e5e5e5',

              }}
            >
              <div
                style={{
                  margin: '0 auto',
                }}
              >
                <img
                  style={{
                    width: '95px',
                    height: '95px',
                  }} src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
                />
              </div>
              <div
                style={{
                  margin: '0 auto',
                  fontSize: '16px',
                  color: '#222',
                                
                }}
              >美团APP手机版</div>
              <div
                style={{
                  margin: '0 auto',
                  fontSize: '12px',
                }}
              ><span
                style={{
                  color: 'red',
                            
                  marginRight: '5px',
                }}
              >1元起</span><span
                style={{
                  color: '#3f3f3f',
                }}
              >吃喝玩乐</span></div>
            </div>
          </div>

        </div>

      </div >
    )
  }


}
