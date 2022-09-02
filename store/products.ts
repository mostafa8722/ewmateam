import { ActionTree, MutationTree, GetterTree } from 'vuex'


import Vue from 'vue'
import Product from '~/data/models/product'






export const state = () => ({
  genres:[] ,
  products:[] ,
  product:[] ,
  searchProducts:[] ,
  credits:[] ,
  page:1,
  total_pages:1,
  total_results:1,
  isLoading  : false,
  isLoadingPage : true,

  
})
export type AuthState = ReturnType<typeof state>

export const getters: GetterTree<AuthState, any> = {
  genres: (state: any) => state.genres,
  products: (state: any) => state.products,
  product: (state: any) => state.product,
  credits: (state: any) => state.credits,
  searchProducts: (state: any) => state.searchProducts,
  page: (state: any) => state.page,
  total_pages: (state: any) => state.total_pages,
  total_results: (state: any) => state.total_results,
  isLoading: (state: any) => state.isLoading,
  isLoadingPage: (state: any) => state.isLoadingPage,

  
 

}

export const mutations: MutationTree<AuthState> = {
 
  
  clearSearch(state:any){
    state.products  = [];
  },
  productsPage(state:any, data:any) {
    state.products = data.results
    state.page = data.page
    state.total_pages = data.total_pages
    state.total_results = data.total_results

  },

  productPage(state:any, data:any) {
    state.product = data;


  },
  genres(state:any, data:any) {
    state.genres = data.genres


  },
  credits(state:any, data:any) {
    state.credits = data.cast.sort(function (a:any, b:any) {
      return b.popularity - a.popularity;
    })


  },
  searchProductsPage(state:any, data:any) {

    state.searchProducts = data.results
    state.page = data.page
    state.total_pages = data.total_pages
    state.total_results = data.total_results

  
  },

}

export const actions: ActionTree<AuthState, any> = {




  async productsPage({ commit, dispatch }, data) {
      


    await this.$repositories
      .products()
      .productsPage(data)
      .then((res:any) => {

     
  
        commit('productsPage',res.data)

      /* let products = res.data.result;
        if(products.length>0)
        this.dispatch('products/setTitle',products[0].store_name)



        setTimeout(()=>{
          
          this.dispatch("home/handleLoading",false)
        },500)*/
      })
      .catch((error:any) => {
        console.log(error)
      //  this.dispatch("home/handleLoading",false)
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },

  async productPage({ commit, dispatch }, data) {
      


    await this.$repositories
      .products()
      .productPage(data)
      .then((res:any) => {

     
  
        commit('productPage',res.data)

     
      })
      .catch((error:any) => {
        console.log(error)
      //  this.dispatch("home/handleLoading",false)
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },

  async genres({ commit, dispatch }, data) {
      


    await this.$repositories
      .products()
      .genrList(data)
      .then((res:any) => {

     
  
        commit('genres',res.data)

      /* let products = res.data.result;
        if(products.length>0)
        this.dispatch('products/setTitle',products[0].store_name)



        setTimeout(()=>{
          
          this.dispatch("home/handleLoading",false)
        },500)*/
      })
      .catch((error:any) => {
        console.log(error)
      //  this.dispatch("home/handleLoading",false)
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },

  async credits({ commit, dispatch }, data) {
      


    await this.$repositories
      .products()
      .creditPage(data)
      .then((res:any) => {

     
        console.log("ttttt",res.data);
  
        commit('credits',res.data)

      /* let products = res.data.result;
        if(products.length>0)
        this.dispatch('products/setTitle',products[0].store_name)



        setTimeout(()=>{
          
          this.dispatch("home/handleLoading",false)
        },500)*/
      })
      .catch((error:any) => {
        console.log(error)
      //  this.dispatch("home/handleLoading",false)
       // Vue.$toast.error("خطا ! لطفا دوباره  یا بعدا تلاش کنید")
      
      })
  },

  async searchPage({ commit, dispatch }, data) {
      
    this.dispatch("home/handleLoading",true)
    this.dispatch("home/addDataSent",true)
    await this.$repositories
      .products()
      .searchPage(data)
      .then((res:any) => {

       
        this.dispatch("home/handleLoading",false)
        this.dispatch("home/addDataSent",false)

     
        if(data.category=='product')
        commit('searchProductsPage',res.data)
        else
        this.dispatch("categories/searchShopsPage",res.data)
        
      })
      .catch((error:any) => {
        this.dispatch("home/handleLoading",false)
        this.dispatch("home/addDataSent",false)
       
      
      })
  },
  
  



}
