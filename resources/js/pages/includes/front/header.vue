<template>
  <div>
      <header class="header-main_area header-main_area-2 " style="background-color:#141318cf">
          <Headermiddle/>
          <Headertop/>
          <Headertopsticky/>
          <Cart/>
          <Mobileheader/>
      </header>
  </div>
</template>

<script>
import Headertop from './header/headertop';
import Headertopsticky from './header/headertopsticky';
import Headermiddle from './header/headermiddle';
import Cart from './header/cart';
import Mobileheader from './header/headmobile';
    export default {
    name:"headerraw",
    components:{
        Headertop,
        Headertopsticky,
        Headermiddle,
        Cart,
        Mobileheader,
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
