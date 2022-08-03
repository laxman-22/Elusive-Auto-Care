import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage'
import ContactUs from '../views/ContactUs'
import BookNow from '../views/BookNow'
import ServicesPage from '../views/ServicesPage'

const routes = [
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/BookNow',
        name: 'BookNow',
        component: BookNow
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/Services',
        name: 'Services',
        component: ServicesPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router