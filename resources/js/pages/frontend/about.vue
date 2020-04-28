<template>
  <div>
      <div class="about-us-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-5">
                        <div class="overview-img text-center img-hover_effect">
                            <a href="#">
                                <img class="img-full" src="themes/uren/assets/images/about-us/1.jpg" alt="Uren's About Us Image">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-7 d-flex align-items-center">
                        <div class="overview-content">
                            <h2>Welcome To <span>Uren's</span> Store!</h2>
                            <p class="short_desc">We Provide Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Repudiandae nisi fuga facilis, consequuntur, maiores eveniet voluptatum, omnis possimus
                                temporibus aspernatur nobis animi in exercitationem vitae nulla! Adipisci ullam illum quisquam.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla veniam? Magni aliquid
                                asperiores magnam. Veniam ex tenetur.</p>
                            <div class="uren-about-us_btn-area">
                                <a class="about-us_btn" href="shop-left-sidebar.html">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Projectcount/>
        <Team/>

  </div>
</template>

<script>
import Projectcount from '../includes/front/aboutorg/projectcount';
import Team from '../includes/front/aboutorg/team';
export default {
    name:"about",
    components:{
        Projectcount,
        Team,
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
