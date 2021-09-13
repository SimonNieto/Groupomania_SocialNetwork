// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
  {
        path: '/',
        name: 'Home',
        component: () => import('../components/Accueil.vue')
      },
      {
        path: '/connexion',
        name: 'connexion',
        component: () => import('../components/Connexion.vue')
      },
      {
        path: '/inscription',
        name: 'inscription',
        component: () => import('../components/Inscription.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../components/Home.vue')
      },
      {
        path: '/compte',
        name: 'compte',
        component: () => import('../components/CompteUser.vue')
      },
      {
        path: "/message/edit/:id",
        name: "MessageEdit",
        component: () => import("../components/MessageEdit")
    },
    {
      path: "/message/drop/:id",
      name: "MessageDrop",
      component: () => import("../components/MessageDrop")
  },
  {
    path: "/commentaires/:id",
    name: "Commentaires",
    component: () => import("../components/Commentaires")
},
{
  path: "/commentaire/edit/:id",
  name: "CommentairesEdit",
  component: () => import("../components/CommentaireEdit")
},
{
  path: "/commentaire/drop/:id",
  name: "CommentairesDrop",
  component: () => import("../components/CommentaireDrop")
},
{
  path: "/compte/messages",
  name: "Messages",
  component: () => import("../components/MessagesUser")
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/connexion", "/inscription"]
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem("userId")
  const loggedToken = localStorage.getItem("token")
  if (authRequired && !loggedIn && !loggedToken) {
      return next("/connexion")
  }
  next()
})
export default router

// export const routes = [
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   },
//   {
//     path: '/test',
//     name: 'test',
//     component: () => import('../components/FirstComponent.vue')
//   },
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('../components/Accueil.vue')
//   },
//   {
//     path: '/connexion',
//     name: 'connexion',
//     component: () => import('../components/Connexion.vue')
//   },
//   {
//     path: '/inscription',
//     name: 'inscription',
//     component: () => import('../components/Inscription.vue')
//   },
//   {
//     path: '/home',
//     name: 'home',
//     component: () => import('../components/Home.vue')
//   },
//   {
//     path: '/compte',
//     name: 'compte',
//     component: () => import('../components/CompteUser.vue')
//   },
// ]
