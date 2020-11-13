<template>
    <div>
        <van-search v-model="city" shape="round" background="#a0c5e8" placeholder="请输入搜索关键词" @search="onSearch" />
        <div class="main">
            <ul>
                <li>
                    <h2>地区天气实况:</h2>
                    <p><i class="iconfont icon-tianqitubiao_qing"></i><span>{{weatherData.city}}</span><span>日期:{{weatherData.date}}</span></p>
                    <span>更新时间:{{weatherData.time}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getData } from "@/api/getweather";

export default {
    name: "Home",
    data() {
        return {
            city: "",
            weatherData: {},
        };
    },
    created() {
        console.log("process.env.BASE_API:", process.env.BASE_API);
        this.hetrequest('深圳')
    },
    methods: {
        onSearch(val){
            console.log('搜索val:',val);
            this.hetrequest(val)
        },
        hetrequest(city) {
            getData(city)
                .then((res) => {
                    console.log("天氣查询res:", res);
                    if (res.ret == 200) {
                        this.weatherData = { ...res.data.weather };
                    }
                })
                .catch((err) => {
                    this.$message.error(err.msg);
                });
        },
    },
};
</script>

<style>
.main ul {
    padding: 0;
}
.main ul li {
    list-style-type: none;
}
.main ul li i {
    font-size: 20px;
    font-weight: bold;
}
.main ul li i::before {
    color: #ffc931;
    /* background-color: #ffc931; */
}
.main ul li span {
    color:#333;
    vertical-align: text-bottom;
}
</style>