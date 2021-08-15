import Home from '../components/Home'
import Landing from '../components/Landing'
import Person from '../components/view/Person'
import Starship from '../components/view/Starship'
import Planets from '../components/view/Planets'
import Starshipdets from '../components/details/Starshipdets'
import Planetsdets from '../components/details/Planetsdets'
import Persondets from '../components/details/Persondets'
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