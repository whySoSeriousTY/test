import {Component} from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import {Button, Modal} from 'antd'

import HelloStore from './store-hello'
import Top from './head.js'
import Classify from './classify'
import Content from './contentBlock'

const store = new HelloStore()

@observer
export default class Hello extends Component {
  render() {
    return (
      <div
        className="all" 
        style={{
          backgroundColor: 'rgb(248, 248, 248)',
        }}
      >
        <Top />
        <Classify />
        <Content />

        
      </div>
    )
  }
}
