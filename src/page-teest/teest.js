import {Component} from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import {
  Popover,
  Icon,
  Button,
} from 'antd'

import TeestStore from './store-teest'

let i = 0
@observer
export default class Teest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // visible: false,  
      // iconVisible: false,  
      // selected: ' ',  
      showBox: [],
    }
    this.list = {
      items: [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
        'item7',
      ],
    }
  }
 
  hide = (c, l) => {
    c.visible = false
    c.data = l
    this.setState(this.state)
  }

  handleVisibleChange = vis => {
    if (vis.visible === true) {
      vis.visible = false
    } else if (vis.visible === false) {
      vis.visible = true
    }
    this.setState(this.state)
  }
  iconIsVisible =vis => {
    vis.iconVisible = true
    this.setState(this.state)
  }
  iconHide=vis => {
    vis.iconVisible = false
    this.setState(this.state)
  }
  addBlock=() => {
    i += 1
    this.state.showBox.push({
      visible: false,
      id: i,
      data: '',
      iconVisible: false,
    })
    this.setState(this.state)
  }
  deleteBlock=vis => {
    for (let h = 0; h < this.state.showBox.length; h += 1) {
      if (this.state.showBox[h].id === vis.id) {
        this.state.showBox.splice(h, 1)
      }
    }
  }
 

  render() {
    // const me = this
    return (
      <div className="test-button">
        <div className="block-container">
          
          {this.state.showBox.map(b => (
            <Popover 
              key={b.id}
              content={
                <ul
                  className="sel-list"
                  onMouseOver={() => { this.iconIsVisible(b) }}
                  onMouseOut={() => { this.iconHide(b) }}
                >
                  {this.list.items.map(item => (
                    <li className="list-li" key={item}>
                      <a onClick={() => { this.hide(b, item) }}>{item}</a>
                    </li>
              ))}
                </ul>
          }
              trigger="click"
              placement="bottom"
              visible={b.visible}
              onVisibleChange={() => { this.handleVisibleChange(b) }}
            >
        
              <div
                className="inner"
                onMouseOver={() => { this.iconIsVisible(b) }}
                onMouseOut={() => { this.iconHide(b) }}
              >
                <div className="text">
                  {
                    b.data
                  }
                </div>
                <div
                  className={b.iconVisible ? 'icons' : 'icons hide'}
                >
                  <Icon 
                    type={b.visible ? 'up' : 'down'}
                  />
                  {/* <div
                    
                  > */}
                  <Icon
                    onClick={() => { this.deleteBlock(b) }}
                    type="close"
                  />
                  {/* </div> */}
                </div>
              </div>


            </Popover>
            ))
          
          }
          <Button 
            onClick={this.addBlock}
            className="add"
          >
            <Icon type="plus-square-o" />
          </Button>
        </div>
      </div>
    )
  }
}

