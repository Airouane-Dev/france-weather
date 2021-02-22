<template>
  <div>
    <HomeDashboard/>
    <div v-for="card in cardMetoe" :key="card">
      <CardOverView 
        :ville="card.ville" 
        :iconMeteo="card.iconMeteo" 
        :temperature="card.temperature" 
        :humidite="card.humidite"/>
    </div>
  </div>
</template>

<script>
import HomeDashboard from '../components/dashboard/HomeDashboard'
import CardOverView from '../components/dashboard/CardOverView'
export default {
name: "Dashboard",
components: {
  HomeDashboard,
  CardOverView
},
data() {
  return {
    cardMetoe: {
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
    }
  }
},
}
</script>

<style scoped>

</style>