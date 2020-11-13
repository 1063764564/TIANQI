<template>
    <div>
        <van-search v-model="city" shape="round" background="#a0c5e8" placeholder="请输入搜索关键词" @search="onSearch" />
        <div class="main">
            <h2>天气实况:</h2>
            <ul>
                <li>
                    <p><i class="iconfont icon-tianqi-duoyunlan blue ft-25"></i><span>{{weatherData.city}}</span><span class="mar-20">{{weatherData.weather}}</span><i class="iconfont icon-wendu3 yello"></i><span class="mar-20">温度:{{weatherData.tem}}</span></p>
                    <p><span class="mar-20">日期:{{weatherData.date}}</span><i class="iconfont blue icon-tianqi"></i> <span>风向:{{weatherData.win}}</span></p>
                    <p><span>风速等级:{{weatherData.win_meter}}</span></p>
                    <p><span class="mar-20">湿度:{{weatherData.humidity}}</span><span>气压:{{weatherData.pressure}} hPa</span></p>
                    <p><span class="mar-20">空气质量:{{weatherData.air}}</span><span>PM2.5:{{weatherData.air_pm25}}</span></p>
                    <p><span class="mar-20">空气质量等级:{{weatherData.air_level}}</span></p>
                    <p><span class="mar-20 fw-600">空气质量描述:{{weatherData.air_tips}}</span></p>
                    <p><span>预警级别:{{earlywarn.alarm_level?earlywarn.alarm_level:'无'}}</span></p>
                    <p><span>预警类型:{{earlywarn.alarm_type?earlywarn.alarm_type:'无'}}</span></p>
                    <p><span>预警信息:{{earlywarn.alarm_content?earlywarn.alarm_content:'无'}}</span></p>
                    <!-- <span>更新时间:{{weatherData.time}}</span> -->
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
            earlywarn: {},
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
                        this.earlywarn = res.data.weather.alarm
                    }else{
                        this.$message.error(res.msg);
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
    /* font-size: 20px; */
    font-weight: bold;
}
.red{
    color: #e33e33;
}
.yello {
    color: #ffc931;
}
.blue {
    color: #a0c5e8;
}
.main ul li span {
    vertical-align: text-bottom;
}
.mar-20{
    margin-right: 20px;
}
.ft-20{
    font-size:20px;
}
.ft-25{
    font-size:25px;
}
.ft-30{
    font-size:30px;
}
.fw-0{
    font-weight:normal;
}
.fw-600{
    font-weight: 600;
}
</style>