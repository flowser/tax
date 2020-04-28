<template>
  <div>
    <div class="uren-footer_area">
      <Footertop/>
      <Footermiddle/>
      <Footerbottom/>
    </div>
  </div>
</template>

<script>
 import Footertop from './footer/footertop';
 import Footermiddle from './footer/footermiddle';
 import Footerbottom from './footer/footerbottom';
export default {
    name:"footerraw",
    components:{
        Footertop,
        Footermiddle,
        Footerbottom,
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
