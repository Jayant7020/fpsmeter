<template>
  <div>

    <NewTest/>
    <div  class="flex justify-center mt-20 mb-8">
        <div class="flex justify-center items-center mr-10">
           <p class="text-xl font-semibold">NUMBER OF TEST :</p>
           <span class="w-14 h-12 ml-4 border-2 border-black rounded-md flex justify-center items-center text-xl font-semibold"> {{ boxes }} </span>
           <div class="flex flex-col ml-4">
            <button class="w-10 h-11 mb-[3px] text-white rounded-sm text-2xl border-black bg-[#236c7e]" @click="incre()">+</button>
            <button class="w-10 h-11 text-white rounded-sm text-2xl border-black bg-[#236c7e]" @click="decre()">-</button> 
           </div>
        </div>


       <div class="flex justify-center items-center ml-8">
           <p class="mr-4 text-xl font-semibold">SPEED :</p>
        <div id="myselector" class="selector flex flex-col items-center justify-center my-8">
          <div class="w-[150px]" @click="selectSource();  myfunc()">
               <div class=" bg-[#d9dada]  dark:bg-[#3e3e3e] text-slate-900 dark:text-slate-300" id="selectField" @click="isOpen = !isOpen">
                  <div class="flex items-center">
                  <p class="sm:ml-4 ml-2 md:text-lg text-sm" id="selectText">{{ selectedValue }}</p>
                  </div>
                  <div>
                  <img src="~/assets/arrow.png" id="arrowIcon" alt="img" class="myarrow block dark:hidden ml-2"/> 
                  <img src="~/assets/white-arrow.png" id="arrowIcon2" alt="img" class="myarrow hidden dark:block ml-2"/>
                  </div>
               </div>
            	<ul id="list" :class="{ 'hidden': isOpen }" class="absolute z-50 w-[150px] alloptions bg-[#d9dada] dark:bg-[#3e3e3e] text-slate-900 dark:text-slate-300">
            	<li @click="changeSpeed(250)" class="option hover:bg-[#236c7e]"><p class="md:text-lg text-sm">250</p></li>
            	<li @click="changeSpeed(350)" class="option hover:bg-[#236c7e]"><p class="md:text-lg text-sm">350</p></li>
            	<li @click="changeSpeed(450)" class="option hover:bg-[#236c7e]"><p class="md:text-lg text-sm">450</p></li>
            	<li @click="changeSpeed(750)" class="option hover:bg-[#236c7e] hover:rounded-b-[6px]"><p class="md:text-lg text-sm">750</p></li>
            	</ul>
            </div> 
        </div>
        </div>
    </div>

    <div class="wrap overflow-hidden bg-black mb-20 ">  
     <img  v-for="(fps, idx) in FPSes" :key="idx" ref="items" class="item w-28" src="~/assets/snail.png"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ITEM_SPEED: 50,
      FPSes: [],
      timers: [],
      boxes : 3,
      selectedValue:250,
      isOpen : true
    };
  },

  mounted() {
  
      const getFPS = () =>
      new Promise(resolve =>
      requestAnimationFrame(t1 =>
      requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
      )
      ) 
      getFPS().then((fpss)=>{
        
        if(fpss==Infinity || fpss < 65){
          this.FPSes.push(60,30,15);
        }else if(fpss > 110 && 130){
          this.FPSes.push(120,60,30);
        }else{
          this.FPSes.push(60,30,15);
        }

      }).then(()=>{  this.myStart()  } )
  },



  methods: {

    myStart(){
      this.FPSes.forEach((fps, idx) =>  {
      let x = 0;
      const $item = this.$refs.items[idx];

      const T = new Timer({
        fps: fps,
        onTick: delta => {
          let wrap = document.querySelector(".wrap").clientWidth-80;
          if (x > wrap) {
            x = 0;
          }
          x += this.ITEM_SPEED * delta;
          $item.style.transform = `translateX(${x}px)`;
        }
      });
      this.timers.push(T);
      T.start();
    });
    },

     
    incre() {
      if(this.boxes < 6){
      let inc = Math.floor(this.FPSes[this.FPSes.length-1]/2);
      this.FPSes.push(inc); 
       this.boxes += 1;
       this.$nextTick(() => {
        this.startNewTimer(); 
      });
    }
    },
    
    decre() {
      if(this.boxes>1){
        this.boxes -= 1;
        this.FPSes.pop();
        this.timers.pop().stop(); 
      }
    },

    startNewTimer() {
      const idx = this.FPSes.length - 1;
      const fps = this.FPSes[idx];

      const firstItem = document.querySelectorAll(".item")[0].style.transform;
      let val = parseFloat(firstItem.match(/-?\d+\.?\d*/));
      let x = val;
      const $item = this.$refs.items[idx];

      const T = new Timer({
        fps: fps,
        onTick: delta => {
          let wrap = document.querySelector(".wrap").clientWidth-80;

          if (x > wrap) {
            x = 0;
          }
   
          x += this.ITEM_SPEED * delta;
          
          $item.style.transform = `translateX(${x}px)`;
        }
      });

      this.timers.push(T);
      T.start();
    },
    
    selectSource() {
     let arrowIcon = document.getElementById("arrowIcon");
     let arrowIcon2 = document.getElementById("arrowIcon2");
     arrowIcon.classList.toggle("rotate");
     arrowIcon2.classList.toggle("rotate");
    },

    myfunc(){
     let listItems = document.querySelectorAll("ul.alloptions li");
     listItems.forEach(function (item) {
       item.onclick = function () {
        arrowIcon.classList.toggle("rotate");
        arrowIcon2.classList.toggle("rotate");
        };
     }); 
    },
    
    changeSpeed(option) {
      this.selectedValue=option;

      if(this.selectedValue==250){
        this.ITEM_SPEED = 50;
      }else if(this.selectedValue==350){
        this.ITEM_SPEED = 100
      }else if(this.selectedValue==450){
        this.ITEM_SPEED = 250
      }else if(this.selectedValue==750){
        this.ITEM_SPEED = 450
      }

      this.isOpen=true;
      let arrowIcon = document.getElementById("arrowIcon");  
      let arrowIcon2 = document.getElementById("arrowIcon2");  
      arrowIcon.classList.toggle("rotate");
      arrowIcon2.classList.toggle("rotate");   
    }
  }

};

class Timer {
  constructor(options) {
    this.fps = options.fps || 16;
    this.onTick = options.onTick || function (dt) {};
    this._frameInterval = 1000 / this.fps;
  }

  start() {
    this.startTime = this.lastTime = window.performance.now();
    this.mainloop();
  }

  mainloop(now) {
    requestAnimationFrame(this.mainloop.bind(this));

    const dt = now - this.lastTime;

    if (dt > this._frameInterval) {
      this.lastTime = now;
      this.onTick(dt / 1000);
    }
  }
}
</script>

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
