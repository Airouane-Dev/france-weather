<template>
    <div>
        <h1>{{ville.name}}</h1>
        <ul>
            <li v-for="daily in daily" :key="daily">{{daily.temp.min}}/{{daily.temp.max}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['ville'],
    data() {
        return {
            daily: null,
            errors:[],
        }
    },
    beforeUpdate() {
        this.getCardVille(this.ville.coord.lon, this.ville.coord.lat)
    },
    methods: {
        getCardVille(long, lat) {
            axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&exclude=hourly,minutely&units=metric&appid=9e02461cb91f451649d7021a718a4348')
            .then(response => {
                this.daily = response.data.daily
            })
            .catch(e => {
                this.errors.push(e)
            })      
        }
    }
}

</script>
<style lang="">
    
</style>