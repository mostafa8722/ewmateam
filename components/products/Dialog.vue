<template>

  <section>
     
  
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
     

      <v-card>
       

        <v-row justify="center">
    <v-date-picker
    color="green lighten-1"
      header-color="primary"
    v-model="picker"></v-date-picker>
  </v-row>

        <v-card-actions>
         
          <v-btn
            color="#ff2200"
            text
            @click="$emit('handle-dimiss')"
          >
           dismiss
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="$emit('handle-select',picker)"
          >
            select Date
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
   
     
  </section>
      
   </template>


<script>
 

    export default {
        props:["dialog"],
        data:()=>({
          picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

          date:null,
      
        }),
      
    
      created(){

       


      }
      ,
      methods:{
        handleNext(e){

         
       
      
      }
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
     
    
     