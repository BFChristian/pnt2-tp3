import { createRouter, createWebHistory } from "vue-router";

import Formulario from "./components/Formulario.vue";

const routes = [
    /* ---- definición de la ruta raíz ---- */
    //{ path: '/', component: Binding },
    { path: '/', redirect: '/Formulario' },

    /* ---- definición de las rutas activas ---- */
    { path: '/formulario', component: Formulario },

    /* ---- definición de las rutas no existentes (por default) ---- */
    { path: '/:pathmatch(.*)*', redirect: '/Formulario' },
]

const router = createRouter({
    history: createWebHistory(),
    routes      // es igual a -> routes: routes
})

export default router