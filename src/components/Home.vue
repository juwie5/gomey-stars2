<template>
  <div>
    <header>
      <nav>
        <router-link :to="{name:'Landing'}"><ul><img src="../assets/logo.png" alt="Starwars-logo"></ul></router-link>
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
          <input type="text" name="search" placeholder="Enter a Search term" @change="addFilterQuery">
        </div>
      </div> 
    </header>
     <router-view></router-view>
  </div>
</template>

<script>
import Starship from '../components/home/Starship'
import Planets from '../components/home/Planets'
import Person from '../components/home/Person'


export default {
  name: 'Home',
  data(){
    return{
      query:'',
    }
  },
  components: {
    Starship,
    Planets,
    Person

  },
  methods:{
      addFilterQuery(event){
        const q = event.target.value;
        if(q){
          this.$router.push({ query: {q}});
        } else {
          this.$router.push({query: {}});
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

</style>