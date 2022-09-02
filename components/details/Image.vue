<template>

  <div class="product-detail relative" >
     
   

    <v-img
       
       height="250"
        width="170"
        
        class="flex-none bg-contain "
        :src="`https://image.tmdb.org/t/p/original${(typeof(product.belongs_to_collection)+''=='object'?product.belongs_to_collection.poster_path:product.backdrop_path)}`"
      
      >
       <template v-slot:placeholder>
           <v-img
          src="/images/logo.jpg"
          
          height="250"
        width="170"
        class="flex-none img-placeholder "
      
      
      ></v-img>
          </template>
      </v-img>
   
  </div>

      
   </template>


<script>

    export default {
       
      props : ["product"],
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
   </style>
     
    
     