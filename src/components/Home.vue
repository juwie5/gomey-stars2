<template>
  <div>
    <header>
      <nav>
        <ul><img src="../assets/logo.png" alt="Starwars-logo"></ul>
      </nav>
      <div class="mid">
        <div class="hero">
          <img src="../assets/logo.png" alt="Starwars-logo">
          <h2>Directory</h2>
        </div>
        <div class="bellow">
            <p>Find your favorite Characters,Films,Species </p>
            <p>Starships and Planets</p>
            <img src="../assets/search.svg" alt="searchIcon" id="search">
          <input type="text" name="search" placeholder="Enter a Search term">
        </div>
      </div> 
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Starship from '../components/Starship'
import Planets from '../components/Planets'
import Person from '../components/Person'
export default {
  name: 'Home',
  components: {
    Starship,
    Planets,
    Person
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
  @import "../styles/Globals/home.scss"

</style>