import Home from '../components/Home'
import Landing from '../components/home/Landing'
import Person from '../components/home/Person'
import Starship from '../components/home/Starship'
import Planets from '../components/home/Planets'
import Starshipdets from '../components/Starshipdets'
import Planetsdets from '../components/Planetsdets'
import Persondets from '../components/Persondets'
import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Home", 
    component: Home, 
    children:[{
        path: "/",
        name: "Landing",
        component: Landing
    },
    {
        path: "/starships",
        name: "Starship",
        component: Starship,
    },
    {
      path: "/persons",
      name: "Person",
      component: Person
    },
    {
      path: "/planets",
      name: "Planets",
      component: Planets
    }
    ]
  },
  {
    path: "/starship/:id",
    name: "starshipdets",
    component: Starshipdets,
    props: true
  },
  {
    path: "/planet/:id",
    name: "planetsdets",
    component: Planetsdets
  },
  {
    path: "/person/:id",
    name: "persondets",
    component: Persondets
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;