<template>
    <div class="mainDiv">
     <div id="wrap">
      <div v-for="(fps, idx) in FPSes" :key="idx" :ref="'item' + idx">{{ fps }}</div>
     </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        FPSes: [8, 16, 60, 180],
        ITEM_SPEED: 60,
        timers: []
      };
    },


    mounted() {
      this.FPSes.forEach((fps, idx) => {
        const x = { value: 0 };
        const $item = this.$refs['item' + idx][0];
  
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
            if (x.value > 400) return;
            x.value += this.ITEM_SPEED * delta;
            $item.style.transform = `translate3d(${x.value}px, 0, 0)`;
          },
          start: function () {
            this.startTime = this.lastTime = performance.now();
            this.mainloop();
          },
          mainloop: function (now) {
            requestAnimationFrame(this.mainloop.bind(this));
            const dt = now - this.lastTime;
            if (dt > 1000 / this.fps) {
              this.lastTime = now;
              this.onTick(dt / 1000);
            }
          }
        };
        return timer;
      }
    }
  };

//   https://blog.canopas.com/how-to-migrate-large-applications-efficiently-from-vue-js-to-nuxt-js-bdd9e41f82a1
//   https://codepen.io/njmcode/pen/dyxgqR
  </script>
  
  <style scoped>

.mainDiv {
  height: 100%;
  background-image: linear-gradient(#000, #993366);
  color: #fff;
}


#wrap {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Specifics */

#items {
  width: 460px;
  margin: 2em auto;
  border: 1px solid white;
}

#items div {
  width: 20px;
  height: 20px;
  margin: 20px;
  background: white;
  color: black;
  font-family: monospace;
  font-size:14px;
}

p {
  line-height: 1.5;
  font-size: 0.9em;
}
  </style>