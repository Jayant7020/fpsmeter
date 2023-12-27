<script setup>
 useHead({
   title: 'Fps-About Us',
   meta: [
     { name: 'description', content: `Test Different FPS Depending on Screen` }
   ],
   htmlAttrs: {
       lang: 'en'
     }
 });
</script>

<template>
  <div class="dark:text-slate-300 dark:bg-[#121212] text-slate-950 bg-white">
    <div class="max-w-screen-2xl flex m-auto items-start justify-between p-4">
      <div class="md:w-1/2 md:m-12">
        <h2 class="text-6xl font-semibold text-[#236c7e] mb-6 font-Amaranth text-center">About Us</h2>

        <div class="md:hidden">
        <img src="~/assets/aboutsnail.png" alt="img"/>
        </div>

        <p class="mb-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas minus
          debitis eveniet obcaecati doloribus?
        </p>
        <p class="mb-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          provident esse magnam culpa dolore reiciendis labore? Doloribus
          quaerat iste a!
        </p>
        <p class="mb-2 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          deserunt voluptatum error ratione sapiente ex, voluptatem vel ipsa ut
          accusamus.
        </p>
      </div>

      <div class="md:block hidden">
        <img src="~/assets/aboutsnail.png" alt="img" />
      </div>
    
    </div>
  </div>
</template>
