<script setup>

const faqs=ref([
  {Que:'que1',ans:'ans1'},
  {Que:'que2',ans:'ans2'},
  {Que:'que3',ans:'ans3'},
  {Que:'que4',ans:'ans4'},
  {Que:'que5',ans:'ans5'},

])

useHead({
   title: 'Coin-Faqs',
   meta: [
     { name: 'description', content: `Your Ultimate Online Coin Toss Tool! Make quick and fair decisions with our virtual coin flip. Heads or tails, it's all in your hands. Flip a digital coin with just a click!` }
   ],
   htmlAttrs: {
       lang: 'en'
     }
 })


</script>

<template>
  <div class="dark:text-slate-300 text-slate-900 dark:bg-[#121212] bg-white">
   
    <div class="max-w-screen-lg items-center m-auto p-3 flex justify-between">
      <div class="w-1/2 mr-10">
          <h2 class="text-6xl font-semibold text-[#236c7e] mb-6 font-Amaranth">Frequently Asked Question's</h2>
          <p class="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga eaque velit quasi soluta doloremque, fugiat ipsam maiores labore nam totam.</p>
      </div>  

    <div class="space-y-4 my-10 w-1/2">

      <details v-for="faq in faqs" :key="faq" class="py-2 px-4 border-l-4 border-[#236c7e] dark:bg-[#222222] bg-[#ececec] group">
        <summary class="flex items-center justify-between cursor-pointer py-3">
          <h2 class="text-lg font-medium dark:text-white text-slate-900">
                {{ faq.Que }}
          </h2> 
          <span class="flex-shrink-0 ml-1.5 p-1.5 dark:text-white text-slate-900 border-2 dark:border-white border-slate-900 rounded-full sm:p-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
            </svg>
          </span>
        </summary>
        <p class="mt-4 leading-relaxed text-slate-950 dark:text-slate-300"> {{ faq.ans }}</p>
      </details>

    </div>

    </div>



  </div>
</template>

