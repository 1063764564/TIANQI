<template>
  <div>
      <h1>Home首页</h1>
      <div>
          <ul>
              <li v-for="(item,index) in list" :key="index">
                  <img :src="item" alt="">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return{
            list:['../../../static/1.png','../../../static/2.png','../../../static/3.jpg','../../../static/4.jpg','../../../static/5.jpg','../../../static/6.jpg'],
        }
    }
}
</script>

<style>
li {
    list-style-type: none;
}
</style>