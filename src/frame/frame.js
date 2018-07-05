import {Component} from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'

// 国际化
import {LocaleProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

// 公用CSS模块
import 'antd/dist/antd.less'
import '@dtwave/oner-flexbox/flexbox.css'
import '../common/common.styl'

// 公用模块
import Sidebar from '../sidebar'
import Head from './head'

export default class Frame extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div className="frame FBV" id="entry">

          {/* 头部 */}
          <Head />
          <div className="frame-main FBH">

            {/* 左侧边栏 */}
            <div className="sidebar-col">
              <Sidebar />
            </div>

            {/* 正文部分 */}
            <div className="FB1 main-col">
              {this.props.children}
            </div>

          </div>
        </div>
      </LocaleProvider>
    )
  }
}
