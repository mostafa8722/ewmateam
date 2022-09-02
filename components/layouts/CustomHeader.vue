<template>

 <header class="bg-[#eeeeee] h-12 flex justify-between items-center">
    <div class="logo ml-3 c-flex items-center ">
        <img class="h-10 rounded-full mr-4" src="../../static/images/logo.jpg" />
        <h2 class="ml-1 font-bold">Ewmateam</h2>
    </div>     
    <div class=" c-flex menu-header ">
        <ul class="flex">
            <li class=" mr-3">
                <NuxtLink  class="pl-2 pr-2 hover:text-blue-500" to="/">
                  Home
                </NuxtLink>
            </li>
            <li class="mr-3">
                <NuxtLink class="pl-2 pr-2 hover:text-blue-500" to="/">
                   Categoris
                </NuxtLink>
            </li>

            <li class=" mr-3">
                <NuxtLink class="pl-2 pr-2 hover:text-blue-500" to="/">
                  Blog
                </NuxtLink>
            </li>
            <li class=" mr-3">
                <NuxtLink  class="pl-2 pr-2 hover:text-blue-500" to="/">
                  Contact us
                </NuxtLink>
            </li>
            <li class="mr-3">
                <NuxtLink class="pl-2 pr-2 hover:text-blue-500" to="/">
                  About us
                </NuxtLink>
            </li>
        </ul>
    </div>     
    <div class=" c-flex right-header"></div>     
</header>
   
</template>
<style scoped>
.c-flex{
    display: flex;
}
</style>
  
 
  