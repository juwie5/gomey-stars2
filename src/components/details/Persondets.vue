<template>
    <div>
        <header>
            <div class="head"> 
                <img src="../../assets/character-3.jpg" alt="character-3">
            </div>
        </header>
        <div class="shipdets">
             <h3>{{peopleDets.name}}</h3>
            <h3>Name: {{peopleDets.name}}</h3>
            <h4>Gender: {{peopleDets.gender}}</h4>
            <h5>Birth year: {{peopleDets.birth_year}}</h5>
            <h5>Mass: {{peopleDets.mass}}kg</h5> 
        </div>

    </div>

</template>

<script>
import axios from 'axios'
export default {
  
    name: 'Persondets',
    data(){
        return{
        id: this.$route.params.id,
        peopleDets: {}
        }
    },
    mounted(){
        axios.get('https://swapi.dev/api/people/' + this.id).then((data) =>{
            console.log(data);
            return  this.peopleDets = data.data;
        })
    }
   
}
</script>

<style lang="scss" scoped>


.head{
    display: flex;
    justify-content: center;
    align-items: center;
}
.head img {
    margin-top: 70px;
     width: 350px;
}
.shipdets{
    text-align: center;
}

</style>