<template>
  <div>
      <h1>Home首页</h1>
          <ul>
              <li v-for="(item,index) in list" :key="index">
                  <img :src="item" alt="">
              </li>
              <!-- <li>
                  <img src="../../assets/1.png" alt="">
              </!-->
          </ul>
  </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return{
            list:[require('../../assets/1.png'),require('../../assets/2.png'),require('../../assets/3.jpg'),require('../../assets/4.jpg'),require('../../assets/5.jpg'),require('../../assets/6.jpg')],
        }
    }
}
</script>

<style>
li {
    list-style-type: none;
}
</style>