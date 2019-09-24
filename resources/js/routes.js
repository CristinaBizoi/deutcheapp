import VueRouter from 'vue-router';
import Categories from './pages/Categories';
let routes = [
    {
        path:'/',
        component: Categories
    }
];
export default new VueRouter({
    routes:routes
})
