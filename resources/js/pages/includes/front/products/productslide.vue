<template>
  <div>
      <div class="product-slide_item">
          <div class="inner-slide">
            <div class="single-product">
              <div class="product-img">
                <a href="single-product.html">
                  <img class="primary-img" src="themes/uren/assets/images/product/large-size/1.jpg" alt="Uren's Product Image"/>
                  <img class="secondary-img" src="themes/uren/assets/images/product/large-size/2.jpg" alt="Uren's Product Image"/>
                </a>
                <div class="sticker">
                  <span class="sticker">New</span>
                </div>
                <div class="add-actions">
                  <ul>
                    <li>
                      <a class="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">
                        <i class="ion-bag"></i>
                      </a>
                    </li>
                    <li>
                      <a class="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist">
                        <i class="ion-android-favorite-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a class="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product">
                        <i class="ion-android-options"></i>
                      </a>
                    </li>
                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter">
                      <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View">
                        <i class="ion-android-open"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-content">
                <div class="product-desc_info">
                  <div class="rating-box">
                    <ul>
                      <li>
                        <i class="ion-android-star"></i>
                      </li>
                      <li>
                        <i class="ion-android-star"></i>
                      </li>
                      <li>
                        <i class="ion-android-star"></i>
                      </li>
                      <li class="silver-color">
                        <i class="ion-android-star"></i>
                      </li>
                      <li class="silver-color">
                        <i class="ion-android-star"></i>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <a class="product-name" href="single-product.html">felix voluptates</a>
                  </h6>
                  <div class="price-box">
                    <span class="new-price">$122.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"productslide",
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
