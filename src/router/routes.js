import {routes as commonRoutes} from 'src/modules/common';
import {routes as authRoutes} from 'src/modules/auth';
import {routes as adminRoutes} from 'src/modules/admin';
import {routes as partnerRoutes} from 'src/modules/partner';
import {routes as costumerRoute} from 'src/modules/costumer';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default [
  ...routes,
  ...commonRoutes,
  ...authRoutes,
  ...adminRoutes,
  ...partnerRoutes,
  ...costumerRoute
]
