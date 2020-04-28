import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// front pages
import Home from './pages/frontend/home.vue';
import About from './pages/frontend/about.vue';
//backend pages
import Dashboard from './pages/backend/dashboard.vue';
import General from './pages/backend/subpages/settings.vue';
import Users from './pages/backend/subpages/users.vue';
import Vehicles from './pages/backend/subpages/vehicles.vue';
import Zones from './pages/backend/subpages/zones.vue';
import Tariffs from './pages/backend/subpages/tariffs.vue';
import Pois from './pages/backend/subpages/pois.vue';
import DriverApp from './pages/backend/subpages/driverapp.vue';
import Notifications from './pages/backend/subpages/notifications.vue';

let routes = [

    //Front End view
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    // backend pages
    {
        path: '/admin',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/general',
        name: 'admin.general',
        component: General,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/users',
        name: 'admin.users',
        component: Users,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/vehicles',
        name: 'admin.vehicles',
        component: Vehicles,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/zones',
        name: 'admin.zones',
        component: Zones,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/tariffs',
        name: 'admin.tariffs',
        component: Tariffs,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/pois',
        name: 'admin.pois',
        component: Pois,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/driverapp',
        name: 'admin.driverApp',
        component: DriverApp,
        meta: {
            // requiresAuth: true,
        }
    },
    {
        path: '/admin/notifications',
        name: 'admin.notifications',
        component: Notifications,
        meta: {
            // requiresAuth: true,
        }
    },
    // {
    //     path: '/home/researchteam',
    //     name: 'researchteam',
    //     component: ResearchTeam,
    //     meta: {
    //         requiresAuth: true,
    //     }
    // },


];



export default new VueRouter({
    mode: 'history',
    routes
});
