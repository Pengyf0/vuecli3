import axiosDeal from "@/utils/axios"//引入拦截处理后的axios

export default {
  getJokeList(data={},type="get"){
    return new Promise((resolve, reject) => {
      axiosDeal.request({method:type,url:'/joke/getJokess',params:data}).then(res => {
        console.log(res);
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}
