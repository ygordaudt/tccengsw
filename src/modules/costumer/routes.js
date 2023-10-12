export default [
  {
    path: '/costumer',
    component: () => import('./layouts/MainLayout.vue'),
    children: [
      {
        name: 'Página Inicial do Cliente',
        path: '',
        component: () => import('./pages/IndexPage.vue')
      },
      {
        name: 'Listagem de Cupons Fiscais',
        path: '/costumer/coupon',
        component: () => import('./pages/CouponListPage.vue'),
        children: [
          {
            name: 'Cadastrar Cupon Fiscal',
            path: '/register',
            component: () => import('./pages/CouponRegisterPage.vue')
          }
        ]
      }
    ]
  }
]
