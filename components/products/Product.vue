<template>

<NuxtLink :to="`/detail/${product.id}`">
<v-card
    class="flex flex-col   overflow-hidden  pointer "
    width="100%"
    height="195"
     color="#f1f1f1"
  
  outlined
  
  >
    <div class="c-flex flex-row  product-item ">
     <v-img
       
     height="195"
      width="145"
      
      class="flex-none bg-contain "
      :src="`https://image.tmdb.org/t/p/original${product.backdrop_path}`"
    
    >
     <template v-slot:placeholder>
         <v-img
        src="/images/logo.jpg"
        height="195"
      width="1"
      class="flex-none img-placeholder "
    
    
    ></v-img>
        </template>
    </v-img>
    <div class="flex flex-col justify-between pt-2 pb-2 pl-2 ">
     
        <h2 class="font-bold">{{product.title}}</h2>
        <div class="c-flex flex-col">
            <div class="date c-flex">
                <v-icon class="date-font">mdi-calendar-blank</v-icon>
                <span class="date-font">{{product.release_date}}</span>
            </div>
            <div class="span">
                <ul class="genres ">
                    <li v-for="genre in product.genre_ids" class="genre-item">
                        {{getGenre(genre).trim().replace(/\s+/g, '_')}}
                    </li>
                    <li>
                 
                    </li>
                </ul>
            </div>
        </div>
      

     
    </div>
    
   

  

  </div>
  </v-card>
  </NuxtLink>
        
     </template>
  
  
  <script>
    import { mapGetters } from 'vuex'
      export default {
        props : ["product"],
        computed: {
             ...mapGetters({
                genres: 'products/genres',
                
               
                 })
         },
         methods:{
            getGenre(id){
                return this.genres.filter((item,index)=>item.id==id)[0].name;
            }
         }
      }
      </script>
  
     <style scoped>
     .c-flex{
         display: flex;
     }
     .bg-contain {
        background-size: contain;
     }
     .genre-item{
        font-size: 0.75rem;
    padding: 0.2rem 0.3rem;
    background: #0044ff;
    color: #ffffff;
    border-radius: 0.3rem;
    margin-right: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

     }
     .genre-item:hover{
        background: #ff2200;
     }
     .genres{
        margin-top:10px;
        display: grid;
    grid-template-columns: repeat(3,1fr);
     }
     .date-font{    font-size: 0.85rem;}
     </style>
       
      
       