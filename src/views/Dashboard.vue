<template>
  <div class="dashboard">
    <div class="navCard">
      <div class="navInput">
        <fa icon="user-secret"/>
        <input type="text" placeholder="Ville"/>
      </div>
      <div v-for="card in cardCity" :key="card">
        <CardOverView 
          :ville="card.name" 
          :iconMeteo="card.weather.icon" 
          :temperature="card.main.temp" 
          :humidite="card.main.humidity"
          v-on:click.native="show(card.id)"/>
      </div>

      <div class="butttonAdd">
        <button>+</button>
      </div>
    </div>

    <div class="contentDashboard" v-if="villeSelected">
      <Content :ville="villeSelected"/>
    </div>
  </div>
</template>

<script>
import CardOverView from '../components/dashboard/CardOverView'
import Content from '../components/dashboard/Content'

import { db } from '../config/firebase'
import axios from 'axios';

export default {
name: "Dashboard",
components: {
  CardOverView,
  Content
},
data() {
  return {
      cardCity: [],
      errors:[],
      villeSelected: null
  }
},
created() {
  db.collection('villeUser').doc("O7ivfQMl0LreHfZspxuv")
    .get().then(snapshot => {
        if (!snapshot.exists) return;
        for(let i = 0; i < snapshot.data().ville.length; i ++) {
          this.getCardVille(snapshot.data().ville[i]);
        }
    })
},
methods: {
  getCardVille(ville) {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ville+'&units=metric&appid=9e02461cb91f451649d7021a718a4348')
      .then(response => {
        this.cardCity.push(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })      
  },
  show: function(villeId) {
    axios.get('https://api.openweathermap.org/data/2.5/weather?id='+villeId+'&units=metric&appid=9e02461cb91f451649d7021a718a4348')
      .then(response => {
        this.villeSelected = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })    
  }
}
}
</script>

<style scoped lang="scss">
.dashboard {
  display: grid;
  grid-template-columns: 40% 70%;
}

.navCard {
  background-clip: rgba(238, 238, 238, 0.25);
  border-right: 2px solid rgba(211, 211, 211, 0.5);
  grid-column: 1;
  position: relative;
}

.contentDashboard {
  grid-column: 2;
}

.navInput {
  margin: 0 auto;
  width: 80%;
  background: rgba(245, 245, 245, 0.8);
  border: 1px solid #E7E7E7;
  border-radius: 11px;

  i {
    padding: 0% 3% 0% 3%;
  }

  input {
    border: none;
    background: none;
    margin: 0 auto;
    height: 50px;
  }
}

.butttonAdd {
  position: absolute;
  right: 5%;
  bottom: 2%;

  button {
    background-color: white;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 15px -1px #000000;
    width: 50px;
    height: 50px;
    font-size: 40px;
  }
}

</style>