<template>
    <div>
        <header>
            <div class="head"> 
                <img src="../assets/starship-3.jpg" alt="">
            </div>
        </header>
        <div class="shipdets">
            <h3>{{shipDets.name}}</h3>
            <h3>Name: {{shipDets.name}}</h3>
            <h4>Model: {{shipDets.model}}</h4>
            <h5>Cargo Capacity: {{shipDets.cargo_capacity}}</h5>
            <h5>Manufacturer: {{shipDets.manufacturer}}</h5>
        </div>

    </div>

</template>

<script>
import axios from 'axios'
export default {
  
    name: 'Starshipdets',
    data(){
        return{
        id: this.$route.params.id,
        shipDets: []    
        }
    },
   mounted(){
        axios.get("https://swapi.dev/api/starships/" + this.id).then((data) =>{
            console.log(data);
            return this.shipDets = data.data;
        })
    }
   
}
</script>

<style lang="scss" scoped>

</style>