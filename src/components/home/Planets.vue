<template>
  <div>
    <h2 v-if="$route.query.q" class="top">Results for "{{$route.query.q}}"</h2>
    <h2 v-else class="top">Planets</h2>
    <div class="nets">
          <div v-for="item in planetData.results" :key="item.id" class="textCen"> 
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
            planetData:{}, 
            currentPage: 1,
        }
    },
    mounted(){
        const {q, page} = this.$route.query;
        this.currentPage = Number.parseInt(page);
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

img{
  width: 300px;
}
</style>