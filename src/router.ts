import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';
import Home from '@/views/Home.vue';
import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth : true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isCurrentUserSet = localStorage.getItem('token');
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isCurrentUserSet) {
    next('login');
  } else {
    next();
  }
});

export default router;
