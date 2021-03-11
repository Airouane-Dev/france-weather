<template>
  <div id="app">
    <ul id="brand">
      <li> France Weather </li>
    </ul>
    <div id="nav">
      <ul id="nav-menu">
        <li>
          <i class="fas fa-home"></i> <br>
          <router-link to="/">Dashboard</router-link>
        </li>
        <li>
          <i class="far fa-map"></i> <br>
          <router-link to="/carte">Map</router-link>
        </li>
        <li>
          <i class="far fa-chart-bar"></i> <br>
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

