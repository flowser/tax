<template>
  <div>
      <Mainnavbar/>
      <Breadcrumb/>
  </div>
</template>

<script>
import Mainnavbar from './header/mainnavbar';
import Breadcrumb from './header/breadcrumb';
export default {
    name:"backmainheader",
    components:{
        Mainnavbar,
        Breadcrumb,
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