export default [
  {
    path: '/partner',
    component: () => import('./layouts/MainLayout.vue'),
    children: [
      {
        name: 'Página Inicial do Parceiro',
        path: '',
        component: () => import('./pages/IndexPage.vue')
      }
    ]
  }
]
