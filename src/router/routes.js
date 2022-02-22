export const routes = [
  { path: '/', component: () => import('../views/Homepage.vue') },
  { path: '/top-gainers', component: () => import('../views/TopGainersPage.vue') },
  { path: '/top-loosers', component: () => import('../views/TopLoosersPage.vue') },
]