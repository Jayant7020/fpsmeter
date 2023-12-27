<script setup>
const color= ref();

onMounted(() => {
  if(localStorage.getItem('color-theme')){
    color.value=localStorage.getItem('color-theme')
    document.documentElement.classList.add(color.value)
  }else{
    color.value="light"
  }
});

function colorMode() {
  document.documentElement.classList.toggle("dark");
  
  
  if(color.value=="dark"){
    color.value="light"
    localStorage.setItem("color-theme",'light');
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
  }else{
    color.value="dark"
    localStorage.setItem("color-theme",'dark');
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
  }
}
</script>

<template>
  <div class="mx-auto bg-white  dark:bg-[#171717] drop-shadow-lg shadow-slate-100 dark:shadow-slate-300 dark:text-slate-800">
    <nav class="">
      <div class="container max-w-screen-xl m-auto flex justify-between sm:px-6 px-2 py-2">

        <div class="self-center sm:text-3xl text-2xl font-semibold font-Alkatra whitespace-nowrap text-[#236c7e]"><NuxtLink to="/" class="flex">FPSTESTER</NuxtLink></div>
        
        <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li class="block py-2 pl-3 pr-4 md:bg-transparent text-slate-800 dark:text-slate-300 md:hover:text-[#236c7e]" aria-current="page"><NuxtLink class="rounded-sm" activeClass="activenavlink" to="/">Home</NuxtLink></li>
            <li class="block py-2 pl-3 pr-4 text-slate-800 dark:text-slate-300 md:hover:bg-transparent md:hover:text-[#236c7e]   md:dark:hover:bg-transparent dark:border-gray-700"><NuxtLink class="rounded-sm" activeClass="activenavlink" to="/about">About</NuxtLink></li>
            <li class="block py-2 pl-3 pr-4 text-slate-800 dark:text-slate-300 md:hover:bg-transparent md:hover:text-[#236c7e]   md:dark:hover:bg-transparent dark:border-gray-700"><NuxtLink class="rounded-sm" activeClass="activenavlink" to="/contact">Contact</NuxtLink></li>
            <li class="block py-2 pl-3 pr-4 text-slate-800 dark:text-slate-300 md:hover:bg-transparent md:hover:text-[#236c7e]   md:dark:hover:bg-transparent dark:border-gray-700"><NuxtLink class="rounded-sm" activeClass="activenavlink" to="/faqs">FAQ's</NuxtLink></li>
          </ul>
          <div class="md:flex my-4 pl-3 hidden">          
          <button @click="colorMode()" class="ml-2" type="button">
            <span class="dark:hidden ">
              <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-white"></path>
                <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-[#236c7e] bg-[#236c7e]"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-[#236c7e] bg-[#236c7e]"></path>
              </svg>
            </span>

            <span class="hidden dark:inline">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-[#121212] stroke-[#236c7e] bg-[#236c7e]"></path>
                <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-[#236c7e] bg-[#236c7e]"></path>
              </svg>
            </span>
          </button>
        </div>
        </div>

        <!-- ------------------------------------------------------------------------------------------------------------------------ -->
        <div class="md:hidden block">
          <div class="flex justify-center items-center">

            <button @click="colorMode()" class="mx-2" type="button" id="headlessui-listbox-button-:R19kcr6:" aria-haspopup="true" aria-expanded="false" data-headlessui-state="" aria-labelledby="headlessui-listbox-label-:Rpkcr6: headlessui-listbox-button-:R19kcr6:">
              <span class="dark:hidden">
              <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" class="fill-white"></path>
                <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-[#236c7e] bg-[#236c7e]"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-[#236c7e] bg-[#236c7e]"></path>
              </svg>
            </span>

            <span class="hidden dark:inline">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-[#121212] stroke-[#236c7e] bg-[#236c7e]"></path>
                <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-[#236c7e] bg-[#236c7e]"></path>
              </svg>
            </span>
          </button>

            <button class="block md:hidden mt-2 rounded focus:outline-none group">
              <div class="w-4 h-1 bg-slate-500 dark:bg-slate-400 mb-1"></div>
              <div class="w-3 h-1 bg-slate-500 dark:bg-slate-400 mb-1"></div>
              <div class="w-4 h-1 bg-slate-500 dark:bg-slate-400"></div>
              
              <div class="absolute top-0 -right-full h-screen w-6/12  dark:bg-[#121212] bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300 z-[99]">
                <ul class="flex flex-col w-full cursor-pointer pt-8 text-slate-800 rounded dark:text-slate-400 text-lg font-medium">
                  <li class="py-3 self-center sm:text-3xl text-2xl font-semibold font-Alkatra whitespace-nowrap text-[#236c7e]"><NuxtLink to="/" class="flex">FPSTESTER</NuxtLink></li>
                  <li class="py-4 px-10 w-full flex"><NuxtLink to="/">Home</NuxtLink></li>
                  <li class="py-4 px-10 w-full flex"><NuxtLink to="/about">About</NuxtLink></li>
                  <li class="py-4 px-10 w-full flex"><NuxtLink to="/contact">Contact</NuxtLink></li>
                  <li class="py-4 px-10 w-full flex"><NuxtLink to="/faqs">FAQ's</NuxtLink></li> 
                </ul>
              </div>
            </button>
            
          </div>
        </div>
      </div>
    </nav>
    <!-- ----------------------------------------------------------------------------------------- -->
  </div>
</template>

<style scoped>
#toggle.active .indicator {
  left: 17px;
}
.activenavlink{
  color: white;
  padding:5px 10px 6px 10px; 
  background:#236c7e;
}
</style>
