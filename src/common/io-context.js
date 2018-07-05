import nattyFetch from 'natty-fetch/dist/natty-fetch'

const context = nattyFetch.context({
  urlPrefix: 'http://192.168.1.85:10060/api/v1/',
  rest: true,
  header: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  // 目前还没有做鉴权，下面的设置为`false`，和服务端的*相对应
  // 如果设为`true`，需要服务端设置响应头`Access-Control-Allow-Origin`为具体的白名单
  withCredentials: false,
  mockUrlPrefix: '/mock/',
  fit(response) {
    return {
      success: response.success,
      content: response.content || {},
      error: {
        message: response.message,
        code: response.code,
      },
    }
  },
})

export default context
