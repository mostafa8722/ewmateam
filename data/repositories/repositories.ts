import {NuxtAxiosInstance} from '@nuxtjs/axios'


import ProductsRepository from '~/data/repositories/productsRepository'

export default class Repositories {
  axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }


  products = () => new ProductsRepository(this.axios)



}
