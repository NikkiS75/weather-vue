<template>
  <div id="app" class="container">
    <WeatherList></WeatherList>
  </div>
</template>

<script>
import WeatherList from "./components/WeatherList";


export default {
  name: 'App',
  components: {
    WeatherList
  }
}
</script>

<style>
  html, body{
    height: 100%;
    background-image: url("assets/shine.jpg") ;
  }
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
