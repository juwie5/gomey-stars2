<template>
    <div>
        <header>
            <div class="head"> 
                <img src="../assets/planet-1.jpg" alt="planet-1">
            </div>
        </header>
        <div class="shipdets">
             <h3>{{planetDets.name}}</h3>
            <h3>Name: {{planetDets.name}}</h3>
            <h4>Temperature: {{planetDets.climate}}</h4>
            <h5>Population: {{planetDets.population}}</h5>
            <h5>Diameter: {{planetDets.diameter}}</h5> 
        </div>

    </div>

</template>

<script>
import axios from 'axios'
export default {
  
    name: 'Planetsdets',
    data(){
        return{
        id: this.$route.params.id,
        planetDets: {}
        }
    },
    mounted(){
        axios.get('https://swapi.dev/api/planets/' + this.id).then((data) =>{
            console.log(data);
            return  this.planetDets = data.data;
        })
    }
   
}
</script>

<style lang="scss" scoped>
    @media only screen and(max-width: 425px){
     .head img{
            margin-top: 30px;
         }
    }
        
</style>