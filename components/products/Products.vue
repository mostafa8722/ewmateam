<template>

  <section>
     
  
    <div class="container mt-20">
      <div class="search-box c-flex flex-col md:flex-row  justify-between mb-10 items-center">
      <div class="release-start-date items-center c-flex mt-2">
        <span>release-start-date</span>
        <span class="box-date ml-3" @click="handleDialog('start')">{{start_date}}</span>
      </div>
      <div class="release-end-date  items-center c-flex mt-2">
        <span>release-end-date</span>
        <span class="box-date ml-3"  @click="handleDialog('end')">{{end_date}}</span>
      </div>
      <div class="search-Button mt-2">
        <button @click="search" >Search</button>
      </div>
    </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
        <Product v-for="product in products"  :key="product.id" :product="product" />
      
    </div>

    <div class="text-center">
    <v-container  >
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page1"
              class="my-4"
              :length="total_pages"
              color="#ff2200"
              :value="page1"
              :total-visible="7"
           
            @input="handleNext"
         
              
            >
    
          </v-pagination>
     
          </v-container>
        </v-col>
      </v-row>
    
    </v-container>
    <div class="c-flex mb-30">total results:{{total_results}} </div>
  </div>
    </div>

<Dialog :dialog="dialog" @handle-dimiss="dialog=false" @handle-select="selectDate" ></Dialog>
   
     
  </section>
      
   </template>


<script>
  import Product from "./Product.vue"
  import Dialog from "./Dialog.vue"
  import { mapGetters } from 'vuex'
    export default {
        components:{Product,Dialog},
        data:()=>({
          page1:1,
          dialog:false,
          end_date:"select date",
          start_date:"select date",
          type_date :""
        }),
        computed: {
             ...mapGetters({
                 products: 'products/products',
                 page: 'products/page',
                 total_pages: 'products/total_pages',
                 total_results: 'products/total_results',
                 isLoading: 'products/isLoading',
                 isLoading: 'products/isLoadingPage',
               
                 })
         },
      props : ["category"],
      created(){

        let query = this.$route.query;
        if(query.page)
        this.page1 = parseInt( query.page) ;


        let data = {
          page :this.page1,
          api_key : "f62f750b70a8ef11dad44670cfb6aa57"
         }
          this.$store.dispatch('products/genres',data)

   
        this.$store.dispatch('products/productsPage',data)
        if(query.page)
           this.$router.push({path: this.$route.path, query: { page:query.page }})

      }
      ,
      methods:{
        handleDialog(e){
          this.type_date = e;
          this.dialog = true;
        },
        search(){

          this.page1 = 0;
          let data = {
          page :1,
          api_key : "f62f750b70a8ef11dad44670cfb6aa57",
         }
        if(this.start_date!="select date")
        data.release_start_date = this.start_date;

        if(this.end_date!="select date")
        data.release_end_date= this.end_date;

        

          this.$store.dispatch('products/productsPage',data)

          this.$router.push({path: this.$route.path, query: { page:1 }})
      
        },
        selectDate(e){
   
          this.dialog = false;
        if(this.type_date=="start")
        this.start_date = e
        else
        this.end_date = e

        },
        handleNext(e){

         
         let data = {
          page :this.page1,
          api_key : "f62f750b70a8ef11dad44670cfb6aa57"
         }
          this.$store.dispatch('products/productsPage',data)

          this.$router.push({path: this.$route.path, query: { page:this.page1 }})
      
        },
      
      }
    }
    </script>

   <style scoped>
   .c-flex{
       display: flex;
   }
   .container{
    width:100%;
    margin:0px auto;
    padding:0px 20px;
    margin-top: 20px;
   }
   .box-date{
    height:40px;
    width: 180px;
    background:#ffffff;
    border-radius: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
   }
   .search-box{
    background-color: #cfcfcf;
    border-radius: 0.1rem;
    padding: 15px 5%;
   }
   .search-Button button{
     background-color: #549df2;
     border-radius: 0.3rem;
     color:#ffffff;
     height:30px;
     width: 80px;
   }
   </style>
     
    
     