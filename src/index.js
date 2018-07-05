import {Component} from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import Frame from './frame'
import Hello from './page-hello'
import Teest from './page-teest'

mobx.useStrict(true)
export default class Entry extends Component {
  render() {
    return (
      <Router>
        {/* <Frame > */}
          <Switch>
            <Route path="/hello" component={Hello} />
            <Redirect exact from="/" to="/hello" />
            <Route path="/teest" component={Teest} />
            <Redirect exact from="/" to="/teest" />
            <Route render={() => <div className="FBV FBAC FBJC" style={{fontSize: 100}}>404</div>} />
            
          </Switch>
        {/* </Frame > */}
      </Router>

    )
  }
}

ReactDOM.render(
  <Entry />,
  document.getElementById('root')
)
