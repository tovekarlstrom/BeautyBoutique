import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ContactView from './views/ContactView.vue'
import MakeupCategories from './views/MakeupCategories.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },

    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: MakeupCategories,
      path: '/:category'
    }
  ]
})
