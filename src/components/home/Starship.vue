<template>
 <div>
     <h2 v-if="$route.query.q" class="top">Results for "{{$route.query.q}}"</h2>
     <h2 v-else class="top">Popular Starships</h2>
     <div class="grid">
         <div v-for="item in shipData.results" :key="item.id" class="tile">
         <img src="../../assets/starship-5.jpg" alt="starship-5">
         <h3>Name: {{item.name}}</h3>
         <p>Model: {{item.model}}</p>
         <p> Cargo Capacity: {{item.cargo_capacity}}</p>
         <router-link id="link" :to="{name:'starshipdets', params: {id: item.id}}"><button class="ship-link">More details</button></router-link> 
         </div> 
      </div>  
      <div class="pagin-btn">
           <p> 1 - 10 of {{shipData.count}}</p>
          <button :disabled="!shipData.previous" @click="goToPrevious()"><img src="../../assets/left.svg"></button>
          <button :disabled="!shipData.next" @click="goToNext()"><img src="../../assets/right.svg"></button>
      </div>
 </div>
</template>


<script>
import { getStarships} from "../../services/swapi"
export default {
    name: 'Starship',
    data(){
        return{
            shipData:{}, 
            currentPage: 1,
        }
    },
    mounted(){
        const {q, page} = this.$route.query;
        this.currentPage;
        this.getShips(q, page);  
    },
      methods:{
        async getShips(query, page){
         let r = await getStarships(query, page);
         const {count, next, previous} = r;
         r.results.forEach((item) => {
          const urlSplit = item.url.split('/')
          item.id = urlSplit[5]
         });
         this.shipData = r;
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
            this.getShips(newQuery.q, newQuery.page);
        }
    }
}

</script>

<style lang="scss" scoped>
.ship-link{
    top: 10px;
}



</style>

