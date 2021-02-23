<template>
  <div id="app">
    <div id="nav">
      <ul id="nav-brand">
        <li> France Weather   </li>
      </ul>
      <ul id="nav-menu">
        <li>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/carte">Map</router-link>
        </li>
        <li>
          <router-link to="/statistique">Analitics</router-link>
        </li>
        <li id="cercle">
          <router-link to="/compte"></router-link>
        </li>
      </ul>
    </div>
    <div id="block-card">
      <router-view></router-view>
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
<style lang="scss">
  @import './stylesheet/main.scss';
</style>
