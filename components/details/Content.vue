<template>

  <section class="c-flex flex-col">
     
    <div class="c-flex justify-between mt-20">
        <span class="p-title">Budget</span>
        <span class="p-value">${{product.budget}}</span>
    </div>


    <div class="c-flex justify-between mt-5">
        <span class="p-title">Revenue</span>
        <span class="p-value" >${{product.revenue}}</span>
    </div>

    <div class="c-flex justify-between mt-5">
        <span class="p-title">Release Date</span>
        <span class="p-value" >{{product.release_date}}</span>
    </div>

    <div class="c-flex justify-between mt-5">
        <span class="p-title">Runtime</span>
        <span class="p-value" >{{product.runtime}}</span>
    </div>

    <div class="c-flex justify-between mt-5">
        <span class="p-title">Score</span>
        <span class="p-value" >{{product.vote_average}}({{product.vote_count}} votes)</span>
    </div>
    <div class="c-flex justify-between mt-5">
        <span class="p-title">Genres</span>
        <span class="p-value" >
          <span v-for="(genre,index) in product.genres">
            {{index!=0?",":""}}
            {{genre.name}}</span>
        </span>
    </div>
 
    <div class="c-flex justify-between mt-5">
        <span class="p-title">IMDB Link</span>
        <span class="p-value" ><a target="_blank" style="color:blue" :href="`https://www.imdb.com/title/${product.imdb_id}/`" >Link</a></span>
    </div>

    <div class="c-flex justify-between mt-5">
        <span class="p-title">Homepage Link</span>
        <span class="p-value" ><a target="_blank" style="color:blue" :href="`${product.homepage}/`" >Link</a></span>

    </div>

    
     
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
   .p-title{font-size: 1rem;color:#454545;font-weight: bold;}
   .v-title{font-size: 0.8rem;color:#454545;}
   </style>
     
    
     