<template>
  <div class="components">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    组件库element view-design 
    <div class="compontTitle"></div>
   
    <br>
    <div class="block">
      饿了么时间组件。
      <el-date-picker
        :shortcuts="textte"
        :picker-options="startTime"
        v-model="value1"
        type="date"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'components',
    data() {
      return {
        value1:'',
        textte:'共产注意，公共生产',
        startTime: {
          // disabledDate(date) {
          //   return date && date.valueOf() < Date.now() - 86400000;
          // }
          disabledDate(time) {
            console.log(1111,time);
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        }
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss" scoped>
  
</style>