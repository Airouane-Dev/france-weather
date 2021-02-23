<template>
  <div class="navCard">
    <div class="navInput">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="Ville"/>
    </div>
    <div class="list-card">
      <div v-for="card in ville" :key="card">
        <CardOverView
            :ville="card"
            :iconMeteo="card.iconMeteo"
            :temperature="card.temperature"
            :humidite="card.humidite"/>
      </div>
    </div>

    <div class="butttonAdd">
      <button v-on:click="show()">+</button>
    </div>
  </div>
</template>

<script>
import CardOverView from '../components/dashboard/CardOverView'
import { db } from '../config/firebase'

export default {
name: "Dashboard",
components: {
  CardOverView
},
data() {
  return {
    /*cardMeteo: {
      card1: {
        ville: "Nantes",
        iconMeteo: "user-secret",
        temperature: "20",
        humidite: "14"
      },
      card2: {
        ville: "Bordeaux",
        iconMeteo: "user-secret",
        temperature: "25",
        humidite: "10"
      }
    },*/
    ville: db.collection('villeUser').doc("O7ivfQMl0LreHfZspxuv")
      .get().then(snapshot => {
          if (!snapshot.exists) return;
          this.ville = snapshot.data().ville
      })
  }
},
methods: { }
}
</script>

<style scoped lang="scss">
.navCard {
  padding-top: 10%;
  max-width: 100%;
  max-height: 100vh;
  background-color: rgba(238, 238, 238, 0.25);
  position: relative;
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