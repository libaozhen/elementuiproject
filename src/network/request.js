import axios from 'axios';
import { stringify } from 'qs';
const request = function(config){
 // axios.defaults.withCredentials = true
  // let baseURL = "http://192.168.1.11/SDJZC/WechatApplet/Interface";
  let baseURL = "http://localhost/SDJZC/API/Vue/";

  // 创建axios实例
  const instance = new axios.create({
    // 默认请求的根路径
    baseURL:baseURL,
    // 默认请求过期时间5秒
    timeout:5000
  });

  //拦截器
  instance.interceptors.request.use(config=>{
		// 兼容 post 跨域问题
		if (config.method === 'post') {
			// 修改 Content-Type
			config.headers['Content-Type'] ='application/x-www-form-urlencoded';
				
			// 将对象参数转换为序列化的 URL 形式（key=val&key=val）
			config.data = stringify(config.data);
		}
    return config;
  },err=>{
    console.log("request拦截器failure方法");
    console.log(err);
    return err;
  });

  instance.interceptors.response.use(response=>{

			
    return response.data
  },err=>{
    // console.log("reponse拦截器failure方法");
    console.log(err);

    return err;
  });

  return instance(config)
}

export default request;

