<template>
 <div>
  <p>Starship</p>
  <button @click="getShip">GetShip</button>
  <!-- <p>{{shipData}}</p> -->
  <div v-for="item in shipData"  class="tile grid">
            <img src="../assets/starship-5.jpg" alt="starship-5">
            <h3>{{item.name}}</h3>
            <p>{{item.model}}</p>
            <p>{{item.cargo_capacity}}</p>
        </div> 
 </div>
</template>


<script>
import { getStarships } from "../services/swapi"
export default {
    name: 'Starship',
    data(){
        return{
            shipData:[], 
            // filterParams: {}
        }
    },
    methods:{
        async getShip(){
         let name = this.name
         let r = await getStarships();
         this.shipData = r.results;
         console.log(r);
         console.log(this.shipData[0].name)
         console.log(this.shipData)
        }
    }
}

</script>

<style scoped>



</style>

