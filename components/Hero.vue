<script setup>
const isOpen=ref(true);

const selectedValue = useSpeed();


function selectSource() {
  let arrowIcon = document.getElementById("arrowIcon");
  let arrowIcon2 = document.getElementById("arrowIcon2");
  arrowIcon.classList.toggle("rotate");
  arrowIcon2.classList.toggle("rotate");
}

function myfunc(){
let listItems = document.querySelectorAll("ul.alloptions li");

listItems.forEach(function (item) {

   item.onclick = function () {
   selectedValue.value=item.childNodes[0].innerHTML
   arrowIcon.classList.toggle("rotate");
   arrowIcon2.classList.toggle("rotate");

   };

}); 
}


function changeSpeed() {
  isOpen.value=true;

  let arrowIcon = document.getElementById("arrowIcon");  
  let arrowIcon2 = document.getElementById("arrowIcon2");  

  arrowIcon.classList.toggle("rotate");
  arrowIcon2.classList.toggle("rotate");  

}

</script>

<template>
    <div  class="flex justify-center">
        <div class="flex justify-center items-center">
           <p>NUMBER OF TEST :</p>
           <span class="w-10 h-10 ml-4 border-2 border-black flex justify-center items-center"> 3 </span>
           <div class="flex flex-col ml-4">
            <button class="w-8 h-8 mb-[1px] text-white border-2 text-lg border-black bg-[#236c7e]">+</button>
            <button class="w-8 h-8 text-white border-2 text-lg border-black bg-[#236c7e]">-</button> 
           </div>
        </div>
        <div class="flex justify-center items-center ml-8">
           <p class="mr-4">SPEED :</p>

        <div id="myselector" class="selector flex flex-col items-center justify-center my-8">
            <div class="w-[150px]" @click="selectSource();  myfunc()">
             <div class=" bg-[#d9dada]  dark:bg-[#3e3e3e] text-slate-800 dark:text-slate-300" id="selectField" @click="isOpen = !isOpen">
                <div class="flex items-center">
                <p class="sm:ml-4 ml-2 md:text-base text-sm" id="selectText">{{ selectedValue }}</p>
                </div>
             <div>
                <img src="~/assets/arrow.png" id="arrowIcon" alt="img" class="myarrow block dark:hidden ml-2"/> 
                <img src="~/assets/white-arrow.png" id="arrowIcon2" alt="img" class="myarrow hidden dark:block ml-2"/>
             </div>
            </div>
            <ul id="list" :class="{ 'hidden': isOpen }" class="absolute w-[150px] alloptions bg-[#d9dada] text-slate-800">
            <li @click="changeSpeed('250')" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">250</p></li>
            <li @click="changeSpeed('350')" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">350</p></li>
            <li @click="changeSpeed('450')" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">450</p></li>
            <li @click="changeSpeed('750')" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">750</p></li>
            </ul>
            </div> 
        </div>

        </div>
    </div>

    <div class="flex flex-col justify-center items-center my-10">
      <!-- <canvas id="fps-test-canvas" height="120" width="940"></canvas> -->
        <div class="h-20 w-[700px] border border-black bg-[#236c7e]"></div>
        <div class="h-20 w-[700px] border border-black bg-[#236c7e]"></div>
        <div class="h-20 w-[700px] border border-black bg-[#236c7e]"></div>
    </div>
</template>

<style scoped>
#selectField {
  width: 100%;
  padding: 8px 10px;
  margin-bottom: border-box;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.myarrow {
  width: 12px;
  transition: transform 0.5s;
}
#list {
  border-radius: 6px;
}
.option {
  padding: 8px 0 10px 60px;
  list-style: none;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
}
.option img {
  width: 25px;
  position: absolute;
  top: 18px;
  left: 25px;
}


.rotate {
  transform: rotate(180deg);
}
</style>