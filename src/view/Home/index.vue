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
import { getData } from "@/api/getweather";

export default {
    name: "Home",
    data() {
        return {
            appkey: "3c3af23f8527f852596f570a1bbeaa12",
            list: [
                require("../../assets/1.png"),
                require("../../assets/2.png"),
                require("../../assets/3.jpg"),
                require("../../assets/4.jpg"),
                require("../../assets/5.jpg"),
                require("../../assets/6.jpg")
            ],
            city:'深圳'
        };
    },
    created() {
        console.log("process.env.BASE_API:", process.env.BASE_API);
        this.hetrequest()
    },
    methods: {
        hetrequest(){
            let city =this.city
            getData(city).then(res => {
                console.log("天氣查询res:", res);
                
            })
            .catch(err => {
                this.$message.error(err.msg);
            });
        },
    }
};
</script>

<style>
li {
    list-style-type: none;
}
</style>