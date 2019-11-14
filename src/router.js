import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/encontrados",
      name: "encontrados",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Encontrados.vue")
    },
    {
      path: "/perdidos",
      name: "perdidos",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Perdidos.vue")
    },
    {
      path: "/nuevo_perdido",
      name: "nuevo_perdidos",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/NuevoPerdido.vue")
    },
    {
      path: "/nuevo_encontrado",
      name: "nuevo_encontrado",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/NuevoEncontrado.vue")
    }
  ]
});
