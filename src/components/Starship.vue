<template>
 <div>
  <p>Starship</p>
 </div>
</template>


<script>
import { getStarships } from "../services/swapi"
export default {
    name: 'Starship',
    components: {

    },
    data(){
        return{
            name: "",
        }
    },
    methods:{
        async getShip(){
        filterParams = {};
         let r = await getStarships({ ... filerParams, page: 3});
         console.log(r);
        }
    }
}

</script>

<style scoped>



</style>

