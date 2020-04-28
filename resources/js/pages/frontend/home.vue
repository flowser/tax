<template>
  <div>
    <div class="shop-content_wrapper">
      <div class="container-fluid">
          <VuePhoneNumberInput v-model="yourValue"  default-country-code="KE" :only-countries="['KE', 'GM', 'GH']"/>
        <div class="row">
          <div class="col-lg-2 col-md-5 order-2 order-lg-1 order-md-1">
            <Sidebar/>
          </div>
          <div class="col-lg-10 col-md-7 order-1 order-lg-2 order-md-2">
            <Shoptoolbar/>
            <Products/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../includes/front/leftsidebar';
import Shoptoolbar from '../includes/front/shoptoolbar';
import Products from '../includes/front/products';
    export default {
    name:"defaulthome",
    components:{
            Sidebar,
            Shoptoolbar,
            Products,
         },
         data(){
            return{
                yourValue:'',
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
