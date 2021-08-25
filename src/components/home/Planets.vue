<template>
  <div>
    <h2 v-if="$route.query.q" class="top">Results for "{{$route.query.q}}"</h2>
    <h2 v-else class="top">Planets</h2>
    <div class="nets">
          <div v-for="item in planetData.results" :key="item.id" class="textCen"> 
            <img class="planet-btn" src="../../assets/planet-1.jpg" alt="planet-1">
            <h3>Name: {{item.name}}</h3>
            <h5>Temperature: {{item.climate}}</h5>
            <h5>population: {{item.population}}</h5>
            <router-link id="link" :to="{name:'planetsdets', params: {id: item.id}}"><button>More details</button></router-link>
          </div>  
    </div>
    <div class="pagin-btn">
          <p> 1 - 10 of {{planetData.count}}</p>
          <button :disabled="!planetData.previous" @click="goToPrevious()"><img  src="../../assets/left.svg"></button>
          <button :disabled="!planetData.next" @click="goToNext()"><img src="../../assets/right.svg"></button>
      </div>
  </div>   
</template>

<script>
import {getPlanets} from '../../services/swapi'
export default {
    name: 'Planets',
    data(){
        return{
            planetData:{}, 
            currentPage: 1,
        }
    },
    mounted(){
        const {q, page} = this.$route.query;
        this.currentPage;
        this.getPlanet(q, page);  
    },
      methods:{
        async getPlanet(query, page){
         let r = await getPlanets(query, page);
         const {count, next, previous} = r;
         r.results.forEach((item) => {
          const urlSplit = item.url.split('/')
          item.id = urlSplit[5]
         });
         this.planetData = r
        },
        goToNext(){
            this.currentPage = this.currentPage + 1;
            this.$router.push ({query: {page: this.currentPage}});
        },
        goToPrevious(){
            this.currentPage = this.currentPage - 1;
            this.$router.push({query: {page: this.currentPage}});
        }       
    },
    watch: {
        '$route.query'(newQuery){
            this.getPlanet(newQuery.q, newQuery.page);
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

.planet-btn{
  width: 200px;
}

@media only screen  and (max-width: 425px){
  .planet-btn{ 
    width: 100px;
  }

}
</style>