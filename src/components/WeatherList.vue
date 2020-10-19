<template>
    <div class="weather">
        <div class="container">
            <div class="weather__wrap row">
                <div class="weather-item__wrap col-xs-12" v-for="(forecast, index) of forecasts" v-bind:key="index">
                    <h3 class="weather-item__date">{{formatDate(forecast.date)}}</h3>
                    <h5 class="weather-item__day">{{formatWeekDay(forecast.date)}}</h5>
                    <img v-bind:src="forecast.icon" >
                    <p class="weather-item__description">{{forecast.description}}</p>
                    <p class="weather-item__temperature">{{averageTemperature(forecast.minTemperature,forecast.maxTemperature)}}°C</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "@/plugins/axios"
    import moment from '@/plugins/moment';
    export default {
        name: "WeatherList",
        data: () => ({
            forecasts:[],
        }),
        methods:{
          getForecasts(){
                axios.get().then(res => {
              for (let i = 1 ; i < 4; i = i + 1){
                const forecast = {
                    date: new Date (res.data.daily[i].dt * 1000),
                    maxTemperature: res.data.daily[i].temp.max,
                    minTemperature: res.data.daily[i].temp.min,
                    description: res.data.daily[i].weather[0].description,
                    icon: `http://openweathermap.org/img/w/${res.data.daily[i].weather[0].icon}.png`
                }
              this.forecasts.push(forecast)
              }
          })},
            formatDate: (value) => {
                return moment(String(value)).format('DD MMMM')
            },
            formatWeekDay: (value) => {
                return moment(String(value)).format('dddd')
            },
            averageTemperature: (min, max) => {
                return Math.round((min+max)/2)
            }
        },
        created() {
            this.getForecasts()
        }
    }
</script>

<style scoped>
    .weather__wrap{
        justify-content: space-around;
    }

    .weather-item__wrap{
        margin: 10px 0;
        background-color: #fff;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        padding: 20px 30px;
        text-align: center;
        box-shadow: 0px 7px 17px -1px rgba(0,0,0,0.39);
        width: 250px;
    }
    .weather-item__day{
        padding: 15px 0;
    }

    .weather-item__temperature{
        font-size: 30px;
        line-height: 35px;
        padding-top: 30px;
    }

    @media (min-width: 768px) {
        html{
            height: auto;
        }
    }
</style>
