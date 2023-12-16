<script setup>
const isOpen=ref(true);
// const FPSes = ref([60,30,15]);

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

////////////////////////////////////////////////////////////////////////////////////

let x = 0;
const selectedValue = useSpeed();

function moveROne(){
  if(selectedValue.value > 350){
      x += 5 
      box1.style.transform = `translateX(${x}px)`;
      // box2.style.transform = `translateX(${x}px)`;
    }else{
      x += 1 
      box1.style.transform = `translateX(${x}px)`;
      // box2.style.transform = `translateX(${x}px)`;
    }
}

function moveRTwo(){
  if(selectedValue.value > 350){
      x += 5 
      box2.style.transform = `translateX(${x}px)`;
    }else{
      x += 1 
      box2.style.transform = `translateX(${x}px)`;
    }
}

function moveRThree(){
  if(selectedValue.value > 350){
      x += 5 
      box3.style.transform = `translateX(${x}px)`;
    }else{
      x += 1 
      box3.style.transform = `translateX(${x}px)`;
    }
}

function moveRFour(){
  if(selectedValue.value > 350){
      x += 5 
      box4.style.transform = `translateX(${x}px)`;
    }else{
      x += 1 
      box4.style.transform = `translateX(${x}px)`;
    }
}

function moveRFive(){
  if(selectedValue.value > 350){
      x += 5 
      box5.style.transform = `translateX(${x}px)`;
    }else{
      x += 1 
      box5.style.transform = `translateX(${x}px)`;
    }
}


function fpsController(cbf,fps){
  this.cbf=cbf;
  this.fps=fps;
  this.then=Date.now();
  this.animate=()=>{
    this.now = Date.now();
    this.diff = this.now - this.then;
    if(this.diff > 1000/this.fps){
      this.cbf();
      this.then=this.now;
    }
    requestAnimationFrame(this.animate);
  }
  this.animate();
}


// function firstFunc(){
// // function who create new fpsController and push in secondFunc

//   FPSes.value.forEach((elem)=>{
//     new fpsController(elem,60)
//   })
// }

// function secondFunc(){
  
// }

onMounted(()=>{
  // fpsSelector(moveROne,60);
  // fpsSelector(moveRTwo,30)

  new fpsController(moveROne,60);
  new fpsController(moveRTwo,30)
  new fpsController(moveRThree,15);
  new fpsController(moveRFour,7)
  new fpsController(moveRFive,3);

  // firstFunc()

})


</script>

<template>
  <div>
 
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
            	<li @click="changeSpeed(250)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">250</p></li>
            	<li @click="changeSpeed(350)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">350</p></li>
            	<li @click="changeSpeed(450)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">450</p></li>
            	<li @click="changeSpeed(750)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">750</p></li>
            	</ul>
            </div> 
        </div>
    </div>

    <div id="box1" class="w-10 h-10 bg-black text-white mb-3">60</div>
    <div id="box2" class="w-10 h-10 bg-black text-white mb-3">30</div>

    <div id="box3" class="w-10 h-10 bg-black text-white mb-3">15</div>
    <div id="box4" class="w-10 h-10 bg-black text-white mb-3">7</div>

    <div id="box5" class="w-10 h-10 bg-black text-white mb-3">3</div>

    <!-- <div v-for="(fps, idx) in FPSes" :key="idx" :class="'item ' + idx">{{ fps }}</div> -->

  </div>
</template>


<style scoped>
#box {
  background-color: cornflowerblue;
  width: 1rem;
  height: 1rem;
}


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



<!-- let then=Date.now();
let now;
function fpsSelector(cbf,fps){
    let animate=()=>{
    now = Date.now();
    let diff = now - then;
    if(diff > 1000/fps){
      cbf();
      then=now;
    }
    requestAnimationFrame(animate);
  }
  animate();
} -->