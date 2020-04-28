<template>
  <div>
    <Header/>
    <Breadcrumb/>
        <router-view ></router-view>
    <Footer/>
    <Modal/>
  </div>
</template>

<script>
import Header from '../pages/includes/front/header';
import Breadcrumb from '../pages/includes/front/breadcrumb';
import Footer from '../pages/includes/front/footer';
import Modal from '../pages/includes/front/modals/quickviewmodal';
    export default {
    name:"defaulthome",
    components:{
        Header,
        Breadcrumb,
        Footer,
        Modal,
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
