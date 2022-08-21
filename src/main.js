import { createApp} from 'vue'
import App from './App.vue'
import  { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../src/components/Sign/SignUp.vue'

const routes = [
    { path: '/', component: App },
    { path: '/signup',component: SignUp  },
    { path: '/login',component: SignUp  },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')