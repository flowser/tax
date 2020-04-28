<template>
  <div>
      <div class="shop-toolbar">
         <Viewmode/>
         <div class="product-item-selection_area">
           <Productsort/>
           <Productshow/>
         </div>
       </div>
  </div>
</template>

<script>
import Viewmode from './shoptoolbar/viewmode';
import Productsort from './shoptoolbar/productsort';
import Productshow from './shoptoolbar/productshow';

export default {
    name:"shoptoolbar",
    components:{
        Viewmode,
        Productsort,
        Productshow,
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
