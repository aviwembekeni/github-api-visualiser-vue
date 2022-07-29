import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import UserView from '../views/UserView.vue'
import FollowersView from '../views/FollowersView.vue'
import FollowingView from '../views/FollowingView.vue'
import ReposView from '../views/ReposView.vue'
import GistsView from '../views/GistsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView
    },
    {
      path: '/:username',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserView,
      props: true,
    },
    {
      path: '/:username/followers',
      name: 'followers',
      component:FollowersView,
      props: true,
    },
    {
      path: '/:username/following',
      name: 'following',
      component: FollowingView,
      props: true,
    },
    {
      path: '/:username/repos',
      name: 'repos',
      component: ReposView,
      props: true,
    },
    {
      path: '/:username/gists',
      name: 'gists',
      component: GistsView,
      props: true,
    }
  ]
})

export default router
