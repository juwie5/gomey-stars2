import Home from '../components/Home'
import Person from '../components/Person'
import Landing from '../components/Landing'
import Starshipdets from '../components/Starshipdets'
import Starship from '../components/Starship'
import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Home", 
    component: Home, 
    children:[{
        path: "/",
        component: Landing
    },
    {
        path: "/starship",
        name: "Starship",
        component: Starship
    }
    ]
  },
  {
    path: "/starship/:id",
    name: "Starshipdets",
    component: Starshipdets
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});

export default router;