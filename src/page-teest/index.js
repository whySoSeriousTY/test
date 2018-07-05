import {asyncComponent} from '../common/util'
import './teest.styl'

export default asyncComponent(async () => {
  try {
    const module = await import('./teest')
    return module.default
  } catch (error) {
    console.log(error)
  }
  return null
})
