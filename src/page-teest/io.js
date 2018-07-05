import ioContext from '../common/io-context'

ioContext.create('teest', {
  getContent: {
    mock: true,
    mockUrl: 'page-hello/getContent',
    url: '',
  },
})

export default ioContext.api.teest
