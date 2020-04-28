<template>
  <div>
      <div class="product-short">
        <label class="select-label">Short By:</label>
        <select class="myniceselect nice-select">
          <option value="1">Default</option>
          <option value="2">Name, A to Z</option>
          <option value="3">Name, Z to A</option>
          <option value="4">Price, low to high</option>
          <option value="5">Price, high to low</option>
          <option value="5">Rating (Highest)</option>
          <option value="5">Rating (Lowest)</option>
          <option value="5">Model (A - Z)</option>
          <option value="5">Model (Z - A)</option>
        </select>
      </div>
  </div>
</template>

<script>
export default {
    name:"productshow",
    components:{
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
