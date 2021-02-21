<template>
  <div id="app">
    <div id="nav">
      <span id="title">
          France Weather
        </span>
      <ul>
        <li>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/carte">Carte</router-link>
        </li>
        <li>
          <router-link to="/statistique">Statistique</router-link>
        </li>
        <li>
          <router-link to="/compte">Compte</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>
npm install -D css-loader
<style lang="scss" scoped>
  @import './stylesheet/main.scss';
</style>
