<template>
     <div>
     <h2>Characters</h2>
       
    <div class="pepGrid">
        <div class="select">
            <label for="gender">FILTER:</label>
            <select name="gender" id="gender" @click="selectPerson">
                <option value=""></option>
                <option value="male">Male</option>         
                <option value="female">Female</option>         
                <option value="n/a">Robot</option>         
            </select>
        </div>
        <div v-for="item in personData" :key="item.id" class="person showGrid">
                <img src="../../assets/character-1.jpg" alt="character-1">
                <h3>Name: {{item.name}}</h3>
                <h5> Gender: {{item.gender}}</h5>
                <h5>Birth Year: {{item.birth_year}}</h5>
                <router-link id="link" :to="{name:'persondets', params: {id: item.id}}">Read More</router-link>
        </div> 
         <div v-for="item in selectedPersons" :key="item.id"  class="person">
            <img src="../../assets/character-3.jpg" alt="character-3">
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
            filterPerson: [],
            selectedPersons: [],
            showGrid: true
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
        const filterPerson = this.personData.filter(person => {
           return person.gender == gender.value
          })
          this.selectedPersons = filterPerson;
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .pepGrid{
        margin-top: 20px;
    }

    .select{
        display: inline-block;
    }

</style>