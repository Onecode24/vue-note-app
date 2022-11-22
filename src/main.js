import { createApp} from 'vue'
import App from './App.vue'
import  { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../src/components/Sign/SignUp.vue'
import AdminBoard from '../src/components/dashboard/admin/AdminBoard.vue'
import Vue3Storage from 'vue3-storage'

const routes = [
    { path: '/', component: App },
    { path: '/signup',component: SignUp  },
    { path: '/login',component: SignUp  }, 
    {path: '/admin', component: AdminBoard},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.use(Vue3Storage)
app.mount('#app')