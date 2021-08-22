<template>
 <div>
     <h2 class="top">Popular Starships</h2>
     <div class="grid">
         <div v-for="item in shipData" :key="item.id" class="tile">
         <img src="../../assets/starship-5.jpg" alt="starship-5">
         <h3>Name: {{item.name}}</h3>
         <p>Model: {{item.model}}</p>
         <p> Cargo Capacity: {{item.cargo_capacity}}</p>
          <router-link id="link" :to="{name:'starshipdets', params: {id: item.id}}"><button>More details</button></router-link> 
         </div> 
      </div>  
      <div class="grid">
          <div v-for="item in filterShip" :key="item.id" class="tile"> 
            <img src="../../assets/starship-2.jpg" alt="starship-2">
            <h3>Name: {{item.name}}</h3>
            <p>Model: {{item.model}}</p>
            <p> Cargo Capacity: {{item.cargo_capacity}}</p> 
          </div> 
        </div>  
        <button @click="getFiltered">click me</button>
         
 </div>
</template>


<script>
import { getStarships} from "../../services/swapi"
export default {
    name: 'Starship',
    props:{
        query: {
            type: String
        }
    },
    data(){
        return{
            shipData:[], 
            filterShip:[]
        }
    },
    mounted(){
        this.getShip();

         //this.getFilteredShip();
    },
      methods:{
        async getShip(){
         let r = await getStarships();
         r.results.forEach((item) => {
          const urlSplit = item.url.split('/')
          item.id = urlSplit[5]
         });
         this.shipData = r.results
        },
        async getFiltered(){
           let q = await getStarships(this.query);
           this.filterShip = q.results
           this.$emit(this.getFiltered)
        },      
    }
}

</script>

<style scoped>



</style>

