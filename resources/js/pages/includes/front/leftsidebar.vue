<template>
  <div>     
        <ProductFilter/>
        <Sidebarbanner/>
  </div>
</template>

<script>
import ProductFilter from './leftsidebar/filter';
import Sidebarbanner from './leftsidebar/sidebarbanner';
export default {
    name:"leftsidebar",
    components:{
        ProductFilter,
        Sidebarbanner,
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
