<template>
    <div>
         <h2 class="top">Popular Starships</h2>
    <div class="grid">
        <div class="tile">
            <img src="../assets/starship-2.jpg" alt="starship-2">
            <h3>Ghost</h3>
            <p>The Ghost is a modified VCX-100 light freighter, manufacture by Corellian Engineering Copration.</p>
            <router-link id="link" :to="`/starship/2`"><button>Read More<span class="arrow"><img src="../assets/arrow-right.svg" alt=""></span></button></router-link>
        </div>
        <div class="tile">
            <img src="../assets/starship-1.jpg" alt="starship-1">
            <h3>Correllian Scout</h3>
            <p>Loronar E-9 Explorer was a transport used by the Rebel Alliance during its fight against the Galactic Empire during its Galactic Civil war.</p>
            <router-link id="link" :to="`/starship/3`"><button>Read More<span class="arrow"><img src="../assets/arrow-right.svg" alt=""></span></button></router-link>
        </div>
        <div class="tile">
            <img src="../assets/starship-3.jpg" alt="starship-3">
            <h3>Raven's Claw</h3>
            <p>The Raven's Claw was a fast light courier that replaced Kyle Katarn's old ship, the Moldy Crow.</p>
            <router-link id="link" :to="`/starship/5`"><button>Read More<span class="arrow"><img src="../assets/arrow-right.svg" alt=""></span></button></router-link>
        </div>
        <div class="tile">
            <img src="../assets/starship-4.jpg" alt="starship-4">
            <h3>Loronar E-9 Explorer</h3>
            <p>Loronar E-9 Explorer was a transport used by the Rebel Alliance during its fight against the Galactic Empire during the Galactic Civil War.</p>
            <router-link id="link" :to="`/starship/9`"><button>Read More<span class="arrow"><img src="../assets/arrow-right.svg" alt=""></span></button></router-link>
        </div>
        <div class="tile">
            <img src="../assets/starship-5.jpg" alt="starship-5">
            <h3>Loronar E-9 Explorer</h3>
            <p>Loronar E-9 Explorer was a transport used by the Rebel Alliance during its fight against the Galactic Empire during the Galactic Civil War.</p>
            <router-link id="link" :to="`/starship/10`"><button>Read More<span class="arrow"><img src="../assets/arrow-right.svg" alt=""></span></button></router-link>
        </div>
        <div class="tile">
            <img src="../assets/starship-6.jpg" alt="starship-6">
            <h3>Outrider</h3>
            <p>The Outrider was a heavily modified YT-2400 light freighter used by Dash Rendar in Shadows of the Empire.</p>
            <router-link id="link" :to="`/starship/11`"><button>Read More<span class="arrow"><img src="../assets/arrow-right.svg" alt=""></span></button></router-link>
        </div>
    </div>   
    <div class="view"><router-link :to="{name:'Starship'}"><button>VIEW MORE</button></router-link></div>
         <h2 class="top">Popular Planets</h2>
      <div class=imgGrid>
        <div class="gridWrap">
          <div class="textCen"> 
            <img src="../assets/planet-1.jpg" alt="planet-1">
           <router-link id="link" :to="`/planet/1`"><p class="text">Corellia</p></router-link>
          </div>
          <div class="textCen">
            <img src="../assets/planet-2.jpg" alt="planet-2">
            <router-link id="link" :to="`/planet/2`"><p class="text">Ord Mantell</p></router-link>
          </div>
          <div class="textCen">
            <img src="../assets/planet-3.jpg" alt="planet-3">
              <router-link id="link" :to="`/planet/3`"><p class="text">Endor</p></router-link>
          </div>
        </div>
    </div>
    <div class="view"><router-link :to="{name:'Planets'}"><img src="../assets/more.svg"></router-link></div>
    <div>
        <h2 class="top">Popular Characters</h2>
        <div class="pepGrid">
            <div class="person">
                <img src="../assets/character-1.jpg" alt="character-1">
                <h3>Luke Skywalker</h3>
                <h6>Son of Anakin</h6>
                <h5>Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic empire...<router-link id="link" :to="`/person/1`">Read More</router-link></h5>
            </div>
               <div class="person">
                <img src="../assets/character-2.jpg" alt="character-2">
                <h3>Han Solo</h3>
                <h6>Cadet</h6>
                <h5>Han Solo rose from an impoverished childhood on the mean streets of Corellia to beome one of the heroes of the Rebel Alliance. As captain of the...<router-link id="link" :to="`/person/2`">Read More</router-link></h5>
            </div>
               <div class="person">
                <img src="../assets/character-3.jpg" alt="character-3">
                <h3>Darth Vader</h3>
                <h6>Anakin Skywalker</h6>
                <h5>Anakin Skywalker, is probably one of the most, iconic bad guys in entertainment industry. Darth Vader is...<router-link id="link" :to="`/person/3`">Read More</router-link></h5>
            </div>
               <div class="person">
                <img src="../assets/character-4.jpg" alt="character-4">
                <h3>Princess Leia</h3>
                <h6>Anakin Skywalker</h6>
                <h5>Princess Leia has always been know to be Force sensitive, yet she didn't show any significant of Force users like other Characters...<router-link id="link" :to="`/person/3`">Read More</router-link></h5>
              </div>
        </div>  
       <div class="view"><router-link :to="{name:'Person'}"><button>VIEW MORE</button></router-link></div>
    </div>
    </div>
</template>


<script>
export default {
    name: 'Landing',
    components: {

    }
}
</script>