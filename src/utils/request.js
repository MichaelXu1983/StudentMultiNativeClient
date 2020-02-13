// 定义 http 请求，返回消息对象
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
// 统一处理 http 请求返回，因为当接收到一个代表错误的 HTTP 状态码时，从 fetch()返回的 Promise 不会被标记为 reject， 即使该 HTTP 响应的状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject，所以此处必须自定义处理这种情况，参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
function checkStatus(response) {
  // 检查 response 的状态是否在200-299(包括200,299)这个范围内，
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  console.error(`请求错误! ${response.status}: ${response.url}(${errortext})`);
  const error = new Error(errortext);
  error.status = response.status;
  error.response = response;
  throw error;
}

const getBaseUrl = url => {
  // 根据请求不同返回不同的 BASE_URL
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    // 开发环境
    if (url.includes('/api/')) {
      BASE_URL = 'https://www.tdreamer.com';
      // BASE_URL = ''
    } else {
      BASE_URL = '';
    }
  } else {
    // 生产环境
    if (url.includes('/api/')) {
      BASE_URL = 'https://www.tdreamer.com';
    } else {
      BASE_URL = '';
    }
  }
  return BASE_URL;
};

export default function httpRequest(url, options) {
  const defaultOptions = {
    // body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
      'X-SS-API-KEY': '7538c18a-9588-40c5-995b-b8a4adf04095', // 第三方生成
    },
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  };
  const newOptions = {...defaultOptions, ...options};
  // newOptions.body = {
  //   // 自定义 http 请求默认键值
  //   jticketid: getAuthority(), // 安全凭据
  //   ...newOptions.body,
  // }

  // if (
  //   newOptions.method === 'POST' ||
  //   newOptions.method === 'PUT' ||
  //   newOptions.method === 'DELETE'
  // ) {
  // }

  return fetch(getBaseUrl(url) + url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}
