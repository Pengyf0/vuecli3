import axios from "axios" ;
import ViewUI from 'view-design';//iview4.0.0以上

let http = {
    get(url,data={}) {
      return new Promise((resolve,reject) => {
        axios.get(url,{params:data})
        .then(res => {
          ViewUI.Message.success({
            background:true,
            content:res.data.message
          })
          resolve(res.data) ;
        }).catch(err => {
          ViewUI.Message.error({
            background:true,
            content:err.message
          })
          reject(err);
        })
      })
     
    },
    post(url,data={}){
      return new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>{
          ViewUI.Message.success({
            background:true,
            content:err.message
          })
          resolve(res.data);
        }).catch(err => {
          ViewUI.Message.error({
            background:true,
            content:err.message
          })
          reject(err);
        })
      })
      // axios.post(url,data).then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   console.log(err);
      // })
             
    }
}
export default http ;
