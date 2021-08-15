<template>
     <div>
     <h2>Characters</h2>
     <label for="gender">Choose a gender:</label>
     <select name="gender" id="">
         <option value=""></option>
         <option value="male">Male</option>         
         <option value="female">Female</option>         
         <option value="robot">Robot</option>         
     </select>
     <div class="pepGrid">
         <div v-for="item in personData" :key="item.id"  class="person">
         <img src="../../assets/character-1.jpg" alt="character-5">
         <h3>Name: {{item.name}}</h3>
         <h5> Gender: {{item.gender}}</h5>
         <h5>Birth Year: {{item.birth_year}}</h5>
        <router-link id="link" :to="{name:'persondets', params: {id: item.id}}">Read More</router-link>
         </div> 
      </div>            
 </div>
</template>

<script>
 import { getPeople } from "../../services/swapi"
export default {
    name: 'Person',
   
    data(){
        return{
            personData:[], 
            // filterParams: {}
        }
    },
    mounted(){
        this.getPerson();
    },
    methods:{
        async getPerson(){
         let r = await getPeople();
        r.results.forEach((item) => {
        const urlSplit = item.url.split('/')
        item.id = urlSplit[5]
        }) 
         this.personData = r.results
        },
        selectPerson(){
            
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .pepGrid{
        margin-top: 20px;
    }

</style>