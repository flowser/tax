<template>
  <div>
      <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center" height="60px">
        <router-link class="navbar-brand" :to="{name:'admin'}">
          <img src="assets/img/logo/taxicaller-logo.svg" class="navbar-brand-img" alt="...">
        </router-link>
      </div>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" :to="{name:'admin.dashboard'}">
                <i class="ni ni-tv-2 text-primary"></i>
                <span class="nav-link-text text-uppercase">Dashboard</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.general'}">
                <i class="fas fa-cog text-info"></i>
                <span class="nav-link-text text-uppercase">General</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.users'}">
                <i class="fas fa-users text-info"></i>
                <span class="nav-link-text text-uppercase">Users</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.vehicles'}">
                <i class="fas fa-car text-info"></i>
                <span class="nav-link-text text-uppercase">Vehicles</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.zones'}">
                <i class="fas fa-map-marked-alt text-info"></i>
                <span class="nav-link-text text-uppercase">Zones</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.tariffs'}">
                <i class="fas fa-calculator text-info"></i>
                <span class="nav-link-text text-uppercase">Tariffs</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.pois'}">
                <i class="fab fa-critical-role text-info"></i>
                <span class="nav-link-text text-uppercase">Pois</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.DdiverApp'}">
                <i class="fab fa-windows text-info"></i>
                <span class="nav-link-text text-uppercase">Driver App</span>
              </router-link>
            </li>
            <hr class="my-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'admin.notifications'}">
                <i class="far fa-bell text-info"></i>
                <span class="nav-link-text text-uppercase">Notifications</span>
              </router-link>
            </li>
            <hr class="my-0">
          </ul>
        </div>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
import SidebarTop from './sidebar/sidetopheader';
import Sidebarlist from './sidebar/sidebarlist';
export default {
    name:"backmainsidebar",
    components:{
        SidebarTop,
        Sidebarlist,
         },
         data(){
            return{

            };
        },
        mounted() {

        },
        computed:{

        },
        methods:{

        }
}
</script>

<style>

</style>
