<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
    provide(){
      return {
        toPage:this.toPage
      }
    },
    data(){
        return{
          leftList:[],
          leftShow:true,
        }
    },
    mounted(){
      console.log(222,this.$router.options.routes);
      let routes = this.$router.options.routes
      this.leftList = routes.filter(item => {
         if(item.tabActived===''){

         }else{
           return item
         }
      })
      console.log(this.leftList);
    },
    methods:{
        toPage(ind){
            this.leftList.map(item => {
              item.tabActived = false;
            })
            this.leftList[ind].tabActived = true;
            this.$router.push({
                path:this.leftList[ind].path
            })
        },
        changeResize(){
          window.onresize = this.leftChange();
        },
        leftChange(){
          console.log(this.leftShow);
          this.leftShow = !this.leftShow;
        }

    }
}
</script>
<style lang="scss" scoped>
   .indexMain{
     height: 100vh;
     overflow: auto;
      .leftNav{
          float: left;
          width: 160px;
          background: #404040;//石灰色
          min-height: 100vh;
          font-size: 20px;
          color: #fff;
          position: relative;
          .imgTitle{
              height: 120px;
              width: 120px;
              background: url('./assets/leftIcon.jpg') center no-repeat;
              background-size: 100% 100%;
              border-radius: 50%;
              margin:0 auto;
              margin-bottom: 20px;
              margin-top: 10px;
              
          }
          .item{
              height: 40px;
              line-height: 40px;
              margin-bottom: 2px;
              cursor: pointer;
              border-radius: 4px;
              &:hover{
                  background: linear-gradient(to right,#1b73ff,#4ac8ff);
              }
              &.checked{
                   background: linear-gradient(to right,#1b73ff,#4ac8ff);
              }
          }
          .foot{
            width: 100%;
            position: absolute;
            bottom: 0;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            background: linear-gradient(to right,#1b73ff,#4ac8ff);
          
          }
      }
      .leftClose{
        width: 50px;
        font-size:12px;
        .item{
          overflow: hidden;
        }
         .imgTitle{
           background:none;
         }
      }
      .rightContent{
          margin-left: 160px;
          text-align: left;
          height: 100vh;
          overflow-y: auto;
          background: #F2F2F2;
          font-size: 14px;
      }
      .rightExpend{
        margin-left: 50px;
      }
   }
</style>
<style lang="scss">
// @import './assets/reset';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
