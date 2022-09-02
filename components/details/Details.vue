<template>

  <section>
     
  
    <div class="container mt-20">
      <div class="search-box c-flex  mb-10 items-center">
      
      
      <div class="back-Button">
        <NuxtLink :to="`/`">
        <button >
          <v-icon color="#ffffff">mdi-arrow-left</v-icon>
          Back</button></NuxtLink>
        
      </div>
      <div class="ml-20 c-flex flex-col">
          <h2 class="title">{{product.title}}</h2>
          <span>{{product.tagline}}</span>
      </div>
    </div>
      <div class="grid grid-cols-c2 gap-10 ">
       <Images :product="product" />
       <Content :product="product" />
    </div>

    <Description :product="product"  />


    <h4 style="font-weight: bold;color:#343434;font-size: 0.9rem;margin-bottom: 10px;">Credit</h4>

    {{
      (credits.slice(0,10).map(item=>item.name).toString()).replace("[","").replace("]","")
    }}
   
    <div style="margin-bottom: 40px;"></div>
 
    </div >


  </section>
      
   </template>


<script>
  import Images from "./Image.vue"
  
  import { mapGetters } from 'vuex'
import Content from "./Content.vue";
import Description from "./Description.vue";

    export default {
        components:{ Images, Content, Description },
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
                 product: 'products/product',
                 credits: 'products/credits',
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


      

        this.handleNext();


      }
      ,
      methods:{
        handleDialog(e){
          this.type_date = e;
          this.dialog = true;
        },
        getSortCast(cast){
          cast.sort(function (a, b) {
  return a.name - b.name;
})
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
       
        handleNext(e){

         
         let data = {
          id :this.$route.params.id,
          api_key : "f62f750b70a8ef11dad44670cfb6aa57"
         }
          this.$store.dispatch('products/productPage',data)

          this.$store.dispatch('products/credits',data)
          //this.$router.push({path: this.$route.path, query: { page:this.page1 }})
      
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
    border-radius: 0.4rem;
    padding: 15px 5%;
   }
   .back-Button button{
     background-color: #549df2;
     border-radius: 0.9rem;
     color:#ffffff;
     height:30px;
     width: 80px;
   }
   .title {
    font-size: 1.1rem;
    font-weight: bold;
    color:#343434;
   }
   .grid-cols-c2{
    grid-template-columns: 1fr 2fr;
   }
   </style>
     
    
     