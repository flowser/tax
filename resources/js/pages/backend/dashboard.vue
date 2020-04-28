<template>
  <div>
      <div class="row mt-2">
        <div class="col-xl-6 col-md-6">
          <div class="card mb-1">
            <!-- Card body -->
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase font-weight-bold mb-0">Billing</h5>
                  <span class="h2 font-weight-bold mb-0">GBP 0.00</span>
                  <h5 class="card-title text-muted mb-0">(account balance)</h5>
                </div>
                <div class="col-auto">
                  <h5 class="card-title text-uppercase  mb-0">Activated Vehicles:
                      <span class="font-weight-bold"> 0</span>
                  </h5>
                </div>
              </div>
              <div class="row">
                <div class="col mt-3 mb-0 text-sm">
                   <h2 class="text-nowrap">Next billing period starts on</h2>
                   <h2 class="text-success mr-2"> 01/05/2020 1:00 am</h2>
                </div>
                <div class="col-auto ">
                  <el-button type="warning" class="text-uppercase mb-0" round>go to blling overview</el-button>
                </div>
              </div>
              <div class="row mt-2">
                  <div class="card border border-danger mb-1">
                      <h2 class="text-nowrap font-weight-bold mt-2 ml-2 mr-2">Notice</h2>
                      <p class="mt-2 ml-2 mr-2">Not enough funds to activate next vehicle. You need to add GBO 2.40 (20.0% taxes)</p>
                  </div>
              </div>
            </div>
          </div>
          <div class="card mb-1">
            <div class="card-body">
               <h5 class="card-title text-uppercase font-weight-bold mb-0">Your Companies</h5>
               <div class="card mb-1 bg-gray-400">
                 <div class="row text-sm mt-2 mb-2">
                   <div class="col  mt-2 mb-2 ml-2 mr-2">
                      <div class="text-nowrap">Taxi Para</div>
                   </div>
                   <div class="col-auto mt-2 mb-2 ml-2 mr-2">
                     <div  class="text-uppercase " >edit</div>
                   </div>
                 </div>
               </div>
               <div class="float-right">
                  <el-button type="warning" class="text-uppercase mb-0" round>Creat New Company</el-button>
                </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-6">
          <div class="card mb-1">
            <div class="card-body">
                <h5 class="card-title text-uppercase font-weight-bold mb-0">Log in</h5>
                <div class="card-title text-uppercase  mb-0">Company Id : <span class="">volt-taxi</span></div>
                <a href="" class="text-green-101"> Click to login to dispatch</a>
                <div class="card-title text-uppercase  mb-0">Dispatch Username : <span class="">Dispatch 1</span></div>
                <p class="mb-0 text-sm">
                    (Only automatically generated password are shown.
                    After you set a new password it will no longer be visible.)</p>
            </div>
          </div>
          <div class="card mb-1">
            <div class="card-body">
                <h5 class="card-title text-uppercase font-weight-bold mb-0">Educational</h5>
                <p class="mb-0 text-sm ">
                   Here you will find a wide variation of knowledge and learning material</p>
                 <h2 class="text-nowrap font-weight-bold">Walkthroughs</h2>
                 <div class="row mt-2">
                     <div class="col-md-4">
                        <div class="card border border-primary mb-1 ">
                            <h5 class="mt-2 ml-2 mr-2 card-title text-uppercase font-weight-bold mb-0">Admin</h5>
                            <h2 class="mt-2 ml-2 mr-2 card-title  mb-0">Get Started</h2>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="card border border-primary mb-1">
                            <h5 class=" mt-2 ml-2 mr-2 card-title text-uppercase font-weight-bold mb-0">Dispatch</h5>
                            <h2 class=" mt-2 ml-2 mr-2 card-title  mb-0">First Job</h2>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="card border border-primary mb-1">
                            <h5 class=" mt-2 ml-2 mr-2 card-title text-uppercase font-weight-bold mb-0">Admin</h5>
                            <h2 class=" mt-2 ml-2 mr-2 card-title  mb-0">First</h2>
                        </div>
                     </div>
                 </div>
                 <h2 class="text-nowrap font-weight-bold">Other Materials</h2>
                 <div class="row mt-2">
                  <div class="col-md-4">
                     <div class="card border border-primary mb-1">
                         <h5 class=" mt-2 ml-2 mr-2 card-title text-uppercase font-weight-bold mb-0">Knowledge Base</h5>
                         <h2 class=" mt-2 ml-2 mr-2 card-title  mb-0">Get Started</h2>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="card border border-primary mb-1">
                         <h5 class=" mt-2 ml-2 mr-2 card-title text-uppercase font-weight-bold mb-0">Manuals</h5>
                         <h2 class=" mt-2 ml-2 mr-2 card-title  mb-0">First Job</h2>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="card border border-primary mb-1">
                         <h5 class=" mt-2 ml-2 mr-2 card-title text-uppercase font-weight-bold mb-0">Videos</h5>
                         <h2 class=" mt-2 ml-2 mr-2 card-title  mb-0">First</h2>
                     </div>
                  </div>
                 </div>
                 <div class="row mt-2">
                  <div class="col-md-4">
                     <div class="card border border-primary mb-1">
                         <h5 class=" mt-2 ml-2 mr-2 card-title text-uppercase font-weight-bold mb-0">FAQ</h5>
                     </div>
                  </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Headercards from '../includes/back/header/headercards';
export default {
    name:"backenddashboard",
    components:{
        Headercards,
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
