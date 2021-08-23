<template>
     <div>
     <h2 v-if="$route.query.q" class="top">Results for "{{$route.query.q}}"</h2>
     <h2 v-else-if="selectedPerson" class="Top">Filtered {{gender.value}} Gender</h2>
     <h2 v-else class="top">Characters</h2>  
    <div class="select">
            <label for="gender">FILTER</label>
            <select name="gender" id="gender" @click="selectPerson()">
                <option value=""></option>
                <option value="male">Male</option>         
                <option value="female">Female</option>         
                <option value="n/a">Robot</option>         
            </select>
             <label for="view">VIEW</label>
            <select name="gender" id="view">
                <option value="">Grid</option>
                <option value="">Grid</option>                 
            </select>
    </div>
    <div class="pepGrid">
        <div v-for="item in personData.results" :key="item.id" class="person" v-bind:class="{box: showGrid}">
                <img src="../../assets/character-1.jpg" alt="character-1">
                <h3>Name: {{item.name}}</h3>
                <h5> Gender: {{item.gender}}</h5>
                <h5>Birth Year: {{item.birth_year}}</h5>
                <router-link class=" top link-text" :to="{name:'persondets', params: {id: item.id}}">Read More</router-link>
        </div>
         <div v-for="item in selectedPersons" :key="item.id" class="person">
            <img src="../../assets/character-3.jpg" alt="character-3">
            <h3>Name: {{item.name}}</h3>
            <h5> Gender: {{item.gender}}</h5>
            <h5>Birth Year: {{item.birth_year}}</h5>
            <router-link :to="{name:'persondets', params: {id: item.id}}"><p class="link-text">Read More</p></router-link>
        </div> 
    </div> 
    <div class="pagin-btn">
           <p> 1 - 10 of {{personData.count}}</p>
          <button :disabled="!personData.previous" @click="goToPrevious()"><img src="../../assets/left.svg"></button>
          <button :disabled="!personData.next" @click="goToNext()"><img src="../../assets/right.svg"></button>
      </div>           
 </div>
</template>

<script>
 import { getPeople } from "../../services/swapi"
export default {
    name: 'Person',
    data(){
        return{
            personData:{}, 
            selectedPersons: [],
            currentPage: 1,
            showGrid: false,
            
        }
    },
    mounted(){
        const {q, page} = this.$route.query;
        this.currentPage;
        this.getPersons(q, page); 
    },
    methods:{
        async getPersons(query, page){
         let r = await getPeople(query, page);
         const {count, next, previous} = r;
         r.results.forEach((item) => {
          const urlSplit = item.url.split('/')
          item.id = urlSplit[5]
         });
         this.personData = r;
        },
        selectPerson(){
          const filterPerson = this.personData.results.filter(person => {
           return person.gender == gender.value
          })
          this.selectedPersons = filterPerson;
          this.showGrid = !this.showGrid
        },
         goToNext(){
            this.currentPage = this.currentPage + 1;
            this.$router.push({query: {page: this.currentPage}});
        },
        goToPrevious(){
            this.currentPage = this.currentPage - 1;
            this.$router.push({query: {page: this.currentPage}});
        }       
    },
    watch: {
        '$route.query'(newQuery){
            this.getPersons(newQuery.q, newQuery.page);
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

    a, .link-text { 
        color: #494957;
        text-decoration: none;
        cursor: pointer;
    }
    .box{
        display: none;
    } 
    
     
</style>