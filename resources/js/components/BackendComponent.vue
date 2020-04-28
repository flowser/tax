<template>
<div>
   <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
      <Sidebar/>
   </nav>
  <div class="main-content" id="panel">
    <Header/>
    <div class="container-fluid">
      <router-view ></router-view>
      <Footer/>
    </div>
  </div>
</div>
</template>

<script>
 import Sidebar from '../pages/includes/back/sidebar';
 import Header from '../pages/includes/back/header';
 import Footer from '../pages/includes/back/footer';
 import Dashboard from '../pages/backend/dashboard';
export default {
    name:"backedmaster",
    components:{
        Sidebar,
        Dashboard,

        Header,
        Footer,
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
