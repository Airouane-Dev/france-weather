<template>
    <div>
        <h1>{{ville.name}}</h1>
        <CardTemp 
            v-for="daily in daily" 
            :key="daily" 
            :min="daily.temp.min" 
            :max="daily.temp.max"
        />
        <button v-on:click="shwo()">show</button>
    </div>
</template>

<script>
import CardTemp from './CardTemp';
import axios from 'axios';
export default {
    components:{
        CardTemp
    },
    props: ['ville'],
    data() {
        return {
            daily: null,
            errors:[],
        }
    },
    created() {
        // axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+ville.coord.lat+'&lon='+ville.coord.lon+'&exclude=hourly,minutely&units=metric&appid=9e02461cb91f451649d7021a718a4348')
        //     .then(response => {
        //         this.daily = response.data.daily
        //     })
        //     .catch(e => {
        //         this.errors.push(e)
        //     })  
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
        },
        shwo() {
            //console.log(ville)
        }
    }
}

</script>
<style lang="">
    
</style>