import Home from '@/views/ClientsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { title: 'Listado de Clientes' }
    },
    {
      path: '/add-client',
      name: 'add-client',
      component: () => import('../views/NewClientView.vue'),
      props: { title: 'Agregar Cliente' }
    },
    {
      path: '/edit-client/:id',
      name: 'edit-client',
      component: () => import('../views/EditClientView.vue'),
      props: { title: 'Editar Cliente' }
    }
  ]
})

export default router
