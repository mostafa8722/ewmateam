import Repository from '~/data/repositories/repository'

import Product from '~/data/models/product'

interface result  {
  result: Product[],
  delivery:number,
  status:number,

}


interface inputData {
  store_id: number,

 

}
export default class ProductsRepository extends Repository {

 

  async productsPage(data: any): Promise<any> {
    let str = "?api_key="+data.api_key;
    if(data.page)
    str += "&page="+data.page;

    if(data.release_start_date)
    str += "&release_start_date="+data.release_start_date;
    if(data.release_end_date)
    str += "&release_end_date="+data.release_end_date;

    console.log(str)
    
    const response = await this.axios.get('https://api.themoviedb.org/3/discover/movie'+str)

    return response
  }
  

  async productPage(data: any): Promise<any> {
    let str = "?api_key="+data.api_key;
  
    
    const response = await this.axios.get(`https://api.themoviedb.org/3/movie/${data.id}`+str)

    
    return response
  }

    async creditPage(data: any): Promise<any> {
    let str = "?api_key="+data.api_key;
  
    
    const response = await this.axios.get(`https://api.themoviedb.org/3/movie/${data.id}/credits`+str)

    
    return response
  }

  async searchPage(data: any): Promise<any> {

    const response = await this.axios.post('https://api.themoviedb.org/3/genre/movie/list?api_key='+data.api_key)
   
    return response
  }
  async genrList(data: any): Promise<any> {

 
    const response = await this.axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+data.api_key)
  
    return response
  }
  
}
