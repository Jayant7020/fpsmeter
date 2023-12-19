<template>
  <div>
    <div class="mainDiv">

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
            	<ul id="list" :class="{ 'hidden': isOpen }" class="relative w-[150px] alloptions bg-[#d9dada] text-slate-800">
            	<li @click="changeSpeed(250)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">250</p></li>
            	<li @click="changeSpeed(350)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">350</p></li>
            	<li @click="changeSpeed(450)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">450</p></li>
            	<li @click="changeSpeed(750)" class="option hover:bg-[#236c7e]"><p class="md:text-base text-sm">750</p></li>
            	</ul>
            </div> 
        </div>
        </div>
    </div>

      <div id="wrap">
        <!-- <div class="flex items-start" v-for="(fps, idx) in FPSes" :key="idx" :ref="'item' + idx" :id="'item' + idx"> {{ fps }}</div> -->
       
        <div class="flex items-start" v-for="(fps, idx) in FPSes" :key="idx" :ref="'item' + idx" :id="'item' + idx"> 
          
          <!-- <img src="`~/assets/img1.jpg`" alt="ufoImg"/> -->
         

         <!-- <img class="bg-repeat-x bg-center" :src="`/img/${img1}`" alt="ufoImg"/> -->
        </div>


        <div class="bg-repeat-x bg-center imgDiv" >
        </div>

      </div>

    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      FPSes: [60,30,15],
      ITEM_SPEED: 50,
      timers: [],
      boxes : 3,
      selectedValue:250,
      isOpen : true
    };
  },
  mounted() {
    this.FPSes.forEach((fps, idx) => {
      const x = { value: 0 };
      const $item = this.$refs["item" + idx][0];
      const T = this.createTimer(fps, x, $item);
      this.timers.push(T);
      T.start();
    });
  },

  methods: {
    createTimer(fps, x, $item) {
      const timer = {
        fps: fps,
        onTick: (delta) => {
          if (x.value > 600) {
            x.value = 0;
          }
          x.value += this.ITEM_SPEED * delta;

          $item.style.transform = `translateX(${x.value}px)`;
          // $item.style.backgroundRepeat = "repeat-x"
        },
        start: function () {
          this.startTime = this.lastTime = performance.now();
          this.mainloop();
        },
        mainloop: function (now) {
          requestAnimationFrame(this.mainloop.bind(this))
          const dt = now - this.lastTime;
          if (dt > 1000 / this.fps) {
            this.lastTime = now;
            this.onTick(dt / 1000);
          }
        },
      };
      return timer;
    },

    startNewTimers(){
     const newFPSIndex = this.FPSes.length-1;
     const newFPS = this.FPSes[newFPSIndex];


     this.$nextTick(()=>{
       const $item = this.$refs["item" + newFPSIndex];
       if($item && $item.length > 0){
        const firstItem = document.getElementById("item0").style.transform;
        let val = parseFloat(firstItem.match(/-?\d+\.?\d*/));
        const x = { value: val }
       const newTimer = this.createTimer(newFPS,x,$item[0]);
       this.timers.push(newTimer);
       newTimer.start();
       }else{
       console.log("Error")
       }
     })
    },

    incre(){  
    let inc = Math.floor(this.FPSes[this.FPSes.length-1]/2);
      if(this.boxes < 6){
       this.boxes += 1;
       this.FPSes.push(inc);
       this.startNewTimers()
      }
    },

    decre(){
     if(this.boxes > 1){
       this.boxes -= 1;
       this.FPSes.pop()
     }
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
        // this.selectedValue=this.item.childNodes[0].innerHTML;
        arrowIcon.classList.toggle("rotate");
        arrowIcon2.classList.toggle("rotate");
        };
     }); 
    },
    
    changeSpeed(option) {
      this.selectedValue=option;

      if(this.selectedValue==250){
        this.ITEM_SPEED = 50
      }else if(this.selectedValue==350){
        this.ITEM_SPEED = 100
      }else if(this.selectedValue==450){
        this.ITEM_SPEED = 150
      }else if(this.selectedValue==750){
        this.ITEM_SPEED = 250
      }

      this.isOpen=true;
      let arrowIcon = document.getElementById("arrowIcon");  
      let arrowIcon2 = document.getElementById("arrowIcon2");  
      arrowIcon.classList.toggle("rotate");
      arrowIcon2.classList.toggle("rotate");   
    }

  },
};
</script>

<style scoped>


.imgDiv{
  background-image: url("assets/img1.jpg");
  /* background: cover;
  background-size: cover; */
  background-repeat: no-repeat;
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

<!-- export default {
  data() {
    return {
      FPSes: [8, 16, 60],
      ITEM_SPEED: 80,
      timers: []
    };
  },
  mounted() {
    this.startTimers();
  },
  methods: {
    startTimers() {
      this.FPSes.forEach((fps, idx) => {
        const x = { value: 0 };
        const $item = this.$refs['item' + idx][0];

        const T = this.createTimer(fps, x, $item);
        this.timers.push(T);
        T.start();
      });
    },
    createTimer(fps, x, $item) {
      const timer = {
        // ... (existing timer code)
      };
      return timer;
    },
    addFPS(newFPS) {
      this.FPSes.push(newFPS);
      const x = { value: 0 };
      const $item = this.$refs['item' + (this.FPSes.length - 1)][0];
      const T = this.createTimer(newFPS, x, $item);
      this.timers.push(T);
      T.start();
    },
    removeFPS(index) {
      if (index >= 0 && index < this.FPSes.length) {
        this.FPSes.splice(index, 1);
        this.timers.splice(index, 1);
      }
    }
  }
}; -->