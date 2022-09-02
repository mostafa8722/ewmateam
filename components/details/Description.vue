<template>

  <section>
     
    <p class="mt-20 mb-10">{{product.overview}}</p>
     
  </section>
      
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
     
    
     