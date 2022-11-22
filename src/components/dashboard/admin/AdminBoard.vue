<template>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <div>
    <div class="p-5">
  <div class="flex bg-gray-300" x-data="{isClose: true, toggle: true}">
    <div id="menu" class="bg-gray-800 flex flex-col justify-between" :class="{'is-close': isClose, 'w-16': isClose, 'w-48': !isClose}" @mouseover="isClose=false" @mouseleave="isClose=true">
      <div>
        <div class="h-16 bg-blue-500 text-white flex items-center justify-center">
          <a class="block px-5 text-white text-lg h-8 flex items-center justify-center" href="javascript:;">
            <span class="bg-blue-700 rounded-full h-8 w-8 flex items-center justify-center">
              <i class="fas fa-spa fa-fw"></i>
            </span>
            <span class="hidden-item px-2">Admin</span>
          </a>
        </div>
        <ul class="text-white">
          <li>
            <a href="javascript:;" class="block p-3 border-b border-gray-900 hover:text-orange-400">
              <i class="fas fa-home fa-fw"></i>
              <span class="hidden-item">Home</span>
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="toggle=!toggle" class="flex items-center p-3 border-b border-gray-900 hover:text-orange-400">
              <div class="flex-1">
                <i class="fas fa-sitemap fa-fw"></i>
                <span class="hidden-item">Sitemap</span>
              </div>
              <i class="hidden-item fas" :class="{'fa-angle-right': toggle, 'fa-angle-down': !toggle }"></i>
            </a>
            <ul class="hidden-item bg-gray-900" :class="{'hidden': toggle}">
              <li class="border-b border-gray-800">
                <a href="javascript:;" class="block px-8 py-3 hover:text-orange-400">Page 1</a>
              </li>
              <li class="border-b border-gray-800">
                <a href="javascript:;" class="block px-8 py-3 hover:text-orange-400">Page 2</a>
              </li>
              <li class="border-b border-gray-800">
                <a href="javascript:;" class="block px-8 py-3 hover:text-orange-400">Page 3</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- Deconnexion -->
      <a href="" class="block p-4 text-center bg-gray-900"  @click="logout()">
        <i class="fas fa-power-off text-red-500"></i>
      </a>
    </div>
    <div class="flex-1 h-full min-h-screen">
      <div class="bg-white p-3 py-5">&nbsp;</div>
      <div class="bg-white m-3 p-3" style="min-height: calc(100vh - 75px);">&nbsp;</div>
    </div>
  </div>
</div>

  </div>
  
</template>
<!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script> -->
<script >
import { useStorage } from 'vue3-storage';
export default {
  name: 'AdminBoard',
  setup(){
    const storage = useStorage();

    const user = storage.getStorageSync('user')
    console.log(user);
    if(!user){
      window.location.href='login'
    }
  },
  methods:{
    logout(){
      console.log('logout');
      const storage = useStorage();
      storage.removeStorageSync('user')
    }
  }
}
</script>

<style>
.is-close {
    text-align: center;
  }
  .is-close .hidden-item {
    display: none;
  }
</style>