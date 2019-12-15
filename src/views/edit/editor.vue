<template>
  <div class="pyfEditor">
    <div class="top">
      <b>一:终端下载包</b>
      <br>
      npm install wangeditor -S
      <br>
      <b>二:页面// 引入echarts</b>
      <br>
      import E from "wangeditor";
      <br>
      写在methods里头；
      <br>
      let editor = new E('#editor')
      editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
      editor.customConfig.uploadImgTimeout = 5000;
    </div>
    <div class="center">
      <div id="editor">
        <div ref="editorElem"></div>
      </div>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name:'editor',
  data(){
    return {

    }
  },
  mounted(){
    this.editorInit();
  },
  methods:{
    editorInit() {
      let _this = this;
      
      let editor = new E('#editor')
      editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
      editor.customConfig.uploadImgTimeout = 5000;
      // 限制一次最多上传 5 张图片
      editor.customConfig.uploadImgMaxLength = 5
      editor.customConfig.uploadImgServer = '/file/uploadFile'
      editor.customConfig.uploadFileName = 'file'
      editor.customConfig.uploadImgParams = {
          code: sessionStorage.getItem('code')
      }
      editor.customConfig.onchange = function (html) {
          // html 即变化之后的内容
          //console.log(html)
          //_this.form.informationContent = html;
          //console.log(_this.form.informationContent);
      }
      editor.customConfig.pasteFilterStyle = false;//关闭粘贴样式
      editor.customConfig.uploadImgHooks = {
          success: function (xhr, editor, result) {
              console.log(xhr, result)
              // 图片上传并返回结果，图片插入成功之后触发
              // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
          },
          fail: function (xhr, editor, result) {
              console.log(xhr, result)
              // 图片上传并返回结果，但图片插入错误时触发
              // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
          },
          error: function (xhr, editor) {
              console.log(xhr)
              // 图片上传出错时触发
              // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
          },
          timeout: function (xhr, editor) {
              console.log('超时')
              // 图片上传超时时触发
              // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
          },

          // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
          // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
          customInsert: function (insertImg, result, editor) {
              // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
              // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果

              // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
              //console.log(result)
              const url = `${result.resultData.DOWN_FTP_URL}&dataType=1`
              insertImg(url)
              _this.form.informationFile = url;
              console.log(23333, _this.form.informationFile);
              // result 必须是一个 JSON 格式字符串！！！否则报错
          }
          }
          editor.create();
        
      },
  }
}
</script>
<style lang="scss" scoped>
  .pyfEditor{
    padding: 20px;
    .top{
      padding: 20px;
      background:#fff;
      margin-bottom: 20px;

    }
    .center{
      background:#fff;
      #editor{
      /deep/ .w-e-text-container{
            height: 400px !important;
        }
      }
    }
   
  }
</style>