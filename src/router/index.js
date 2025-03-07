import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import HomeView from '@/views/HomeView.vue'
import CompanyView from '@/views/CompanyView.vue'
import DocumentView from '@/views/DocumentView.vue'
import UserView from '@/views/UserView.vue'
import ConfigView from '@/views/ConfigView.vue'

const routes = [
  { path: '/login', component: LoginView },
  {
    path: '/',
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'home', component: HomeView, meta: { label: 'Dashboard' } },
      { path: 'company', name: 'company', component: CompanyView, meta: { label: 'Empresas' } },
      { path: 'document', name: 'document', component: DocumentView, meta: { label: 'Documentos' } },
      { path: 'user', name: 'user', component: UserView, meta: { label: 'Usuários' } },
      { path: 'config', name: 'config', component: ConfigView, meta: { label: 'Configurações' } }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Proteção de rotas
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth')

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
