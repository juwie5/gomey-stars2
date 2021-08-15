<template>
  <div>
    <h2>Planets</h2>
    <div class="nets">
          <div v-for="item in planetData" :key="item.id" class="textCen"> 
            <img src="../../assets/planet-1.jpg" alt="planet-1">
            <p>Name: {{item.name}}</p>
            <p>Temperature: {{item.climate}}</p>
            <p>population: {{item.population}}</p>
            <router-link id="link" :to="{name:'planetsdets', params: {id: item.id}}"><button>More details</button></router-link>
          </div>  
    </div>
  </div>   
</template>

<script>
import {getPlanets} from '../../services/swapi'
export default {
    name: 'Planets',
    data(){
      return{
        planetData: []
      }
    },
    mounted(){
      this.getPlanet()
    },
    methods:{
      async getPlanet(){
        let r = await getPlanets();
        r.results.forEach((item) => {
          const urlSplit = item.url.split('/')
          item.id = urlSplit[5]
        })  
        this.planetData = r.results;
      }
    }
}
</script>

<style lang="scss" scoped>
.nets{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row; 
  justify-content: center;

}

img{
  width: 300px;
}
</style>