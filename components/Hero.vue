<template>
  <div>
    <div  class="flex justify-center">
        <div class="flex justify-center items-center">
           <p>NUMBER OF TEST :</p>
           <span class="w-10 h-10 ml-4 border-2 border-black flex justify-center items-center"> {{ boxes }} </span>
           <div class="flex flex-col ml-4">
            <button class="w-8 h-8 mb-[1px] text-white border-2 text-lg border-black bg-[#236c7e]" @click="incre()">+</button>
            <button class="w-8 h-8 text-white border-2 text-lg border-black bg-[#236c7e]" @click="decre()">-</button> 
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
            	<ul id="list" :class="{ 'hidden': isOpen }" class="absolute z-50 w-[150px] alloptions bg-[#d9dada] text-slate-800">
            	<li @click="changeSpeed(250)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">250</p></li>
            	<li @click="changeSpeed(350)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">350</p></li>
            	<li @click="changeSpeed(450)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">450</p></li>
            	<li @click="changeSpeed(750)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">750</p></li>
            	</ul>
            </div> 
        </div>
        </div>
    </div>


    <div class="wrap overflow-hidden bg-black">
      
      <!-- <div v-for="(fps, idx) in FPSes" :key="idx" ref="items" class="item">
        <img  src="~/assets/UFO.png"/>
      </div> -->

      <img  v-for="(fps, idx) in FPSes" :key="idx" ref="items" class="item" src="~/assets/UFO.png"/>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      ITEM_SPEED: 50,
      FPSes: [60,30,15],
      timers: [],
      boxes : 3,
      selectedValue:250,
      isOpen : true
    };
  },
  mounted() {
    this.FPSes.forEach((fps, idx) => {
      let x = 0;
      const $item = this.$refs.items[idx];
      // $item.textContent = fps;

      const T = new Timer({
        fps: fps,
        onTick: delta => {
          let wrap = document.querySelector(".wrap").clientWidth-80;
          if (x > wrap) {
            x = 0;
          }
          // let myItem = document.querySelector(".item").offsetWidth;
          // console.log(myItem)

          x += this.ITEM_SPEED * delta;
          $item.style.transform = `translate3d(${x}px, 0, 0)`;

        }
      });

      this.timers.push(T);
      T.start();
    });
  },

  methods: {
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
      this.FPSes.pop();
      this.timers.pop().stop(); 
    },

    startNewTimer() {
      const idx = this.FPSes.length - 1;
      const fps = this.FPSes[idx];

      let x = 0;
      const $item = this.$refs.items[idx];

      const T = new Timer({
        fps: fps,
        onTick: delta => {
          let wrap = document.querySelector(".wrap").clientWidth - 100;
          if (x > wrap) {
            x = 0;
          }
   
          x += this.ITEM_SPEED * delta;
          $item.style.transform = `translate3d(${x}px, 0, 0)`;

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

/* .shaper {
  background: url('~/assets/img1.jpg') repeat 0 0 ;
  width: 100%;
  height: 110px;
  animation: slide 5s linear infinite;
}

@keyframes slide {
    from { background-position: 0 0; }
    to { background-position: 893px 0px; }
} */

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
